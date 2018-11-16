export default class PullDowd {
  constructor(opts) {
    this.wrap = opts.wrap || null;
  }

  init() {
    this.handleFindEl();
  }

  handleFindEl() {
    console.log(this.wrap);
    if (!this.wrap) {
      throw new Error('不存在元素');
    }
    this.wrap.innerHTML = this.handleCreatDownEl();
  }

  handleCreatDownEl() {
    return '<div>handleCreatDownEl</div>';
  }


};