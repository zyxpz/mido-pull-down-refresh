
import Pulldown from '../src/pulldown';

const wrap = document.querySelector('.J-wrap');

const pulldown = new Pulldown({
  wrap,
  pullDom: () => {
    return '<div>123</div>';
  }
});

pulldown.init();