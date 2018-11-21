
import Pulldown from '../src/pulldown';

const wrap = document.querySelector('.J-wrap');

const pulldown = new Pulldown({
  wrap,
  pullDom: () => {
    return '<div class="pull-top">123</div>';
  }
});

pulldown.init();