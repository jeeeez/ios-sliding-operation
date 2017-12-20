# ios-sliding-operation
A implement of imitate iOS list sliding operation with Javascript.

## Install
```
npm i ios-sliding-operation
```

## How To Use
```html
<ul>
    <li class="item">
        <div class="content">
            <div class="text">左滑删除左滑删除左滑删除</div>
            <div class="controls">删除</div>
        </div>
    </li>
</ul>
```

```css
.item {
    border-bottom: 1px solid #ddd;
    color: #444;
    font-size: 14px;
    overflow: hidden;
}

.content {
    width: calc(100vw + 100px);
    position: relative;
    transform: translateX(0);
}

.drag-end {
    transition: all 0.15s ease-in-out;
}

.text,
.controls {
    line-height: 40px;
    padding: 6px 15px;
}

.text {
    width: 100vw;
}

.controls {
    width: 100px;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 0;
    background: red;
    color: #fff;
    text-align: center;
}
```

```javascript
import generator from 'ios-sliding-operation';

const items = document.querySelectorAll('.item');

for (let item of items){
    generator(item, { duration: 3000 });
}
```


## Comming soon
+ implement in React.js
+ implement in Ng2
+ implement in Vue.js
