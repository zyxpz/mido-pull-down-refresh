import Pulldown from '../src/pulldown';

const wrap = document.querySelector('.J-wrap');

const pulldown = new Pulldown({
  wrap,
  pullDom: '<div class="pull-top">moveStart</div>',
  pullMoveEvent: () => {
    document.querySelector('.pull-top').innerHTML = '下拉刷新';
  },
  pullEndEvent: (cb) => {
    document.querySelector('.pull-top').innerHTML = '正在加载';

    setTimeout(() => {
      cb();
    }, 2000);

  }
});

pulldown.init();