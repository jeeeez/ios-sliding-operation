export default function generator($item, options = {}) {
	const opts = Object.assign({
		contentSelector: '.content',
		operationSelector: '.controls',
		animationClass: 'drag-end',
		duration: 0
	}, options);
	$item.addEventListener('touchstart', genTouchStart($item, opts), false);
}

function genTouchStart(item, opts) {

	const $content = item.querySelector(opts.contentSelector);
	const $control = item.querySelector(opts.operationSelector);

	const animationClass = opts.animationClass;

	const duration = opts.duration;

	return function onTouchStart(startEvent) {
		const width = $control.clientWidth;

		clearTimeout(item.$timer);

		let offset = 0;

		$content.classList.remove(animationClass);

		const currentOffset = +($content.getAttribute('data-offset')) || 0;
		const startX = startEvent.touches[0].clientX;
		const startY = startEvent.touches[0].clientY;

		document.addEventListener('touchmove', onTouchMove, false);
		document.addEventListener('touchend', onTouchEnd, false);

		let istouchX = false;

		function onTouchMove(evt) {
			const nowX = evt.touches[0].clientX;
			const nowY = evt.touches[0].clientY;

			istouchX = Math.abs(nowX - startX) > Math.abs(nowY - startY);

			const distance = nowX - startX + currentOffset;

			if (distance > -width && distance < 0) {
				offset = Math.floor(distance);
				istouchX && setOffset(offset);
			}
		}

		function onTouchEnd(evt) {
			$content.classList.add(animationClass);
			document.removeEventListener('touchmove', onTouchMove);
			document.removeEventListener('touchend', onTouchEnd);

			if (duration) {
				item.$timer = setTimeout(() => {
					setOffset(0);
				}, duration);
			}

			if (offset !== 0 && istouchX) {
				setTimeout(() => {
					setOffset(offset > -(width / 2) && offset < 0 ? 0 : -width);
				}, 0);
			}

		}

		function setOffset(offset) {
			$content.style.transform = `translateX(${offset}px)`;
			$content.setAttribute('data-offset', offset);
		}
	}
}
