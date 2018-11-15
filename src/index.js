import PullDown from './pulldown';

const wrap = document.querySelector('.test');

console.log(wrap, 111);

const pulldown =  new PullDown({
  wrap,
});

pulldown.init(); 