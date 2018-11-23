# h5-上拉加载下拉刷新

name|types|default|说明
---|:--:|---:|---:
wrap|HTML|无|滑动块
pullDom|string|<div class="pull-refresh">下拉刷新</div>|html字符串
pullMoveEvent|fun|loop|拖动中事件处理
pullEndEvent|fun|loop|拖动结束事件处理


- 使用案例
```js
const wrap = document.querySelector('.J-wrap');

const pulldown = new Pulldown({
  wrap, // 可下拉区域
  pullDom: '<div class="pull-top">moveStart</div>'; // 下拉提示区
  pullMoveEvent: () => {
    document.querySelector('.pull-top').innerHTML = '下拉刷新'; // 拖动中的时间
  },
  pullEndEvent: (callback) => {
    document.querySelector('.pull-top').innerHTML = '正在加载'; // 松手后的事件 callback 可以再请求成功后调用

    setTimeout(() => {
      cb();
    }, 2000);

  }
});

pulldown.init();
```