import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import generateListItem from '../src/ios-sliding-operation';

class App extends React.Component {

	componentDidMount() {
		const items = this.refs.items.querySelectorAll('.item')
		for (let item of items) {
			generateListItem(item, { duration: 3000 });
		}
	}

	render() {
		return (<ul className="items" ref="items">
			{Array(20).fill().map((item,index) => {
				return <li className="item" key={index}>
					<div className="content">
						<div className="text">左滑删除左滑删除左滑删除</div>
						<div className="controls">删除</div>
					</div>
				</li>;
			})}
		</ul>);
	}
}

ReactDOM.render(<App />,document.getElementById('root'));
