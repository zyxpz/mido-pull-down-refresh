import PullDown from './pulldown';

const wrap = document.querySelector('.test');

const pulldown =  new PullDown({
  wrap,
});

pulldown.init(); 