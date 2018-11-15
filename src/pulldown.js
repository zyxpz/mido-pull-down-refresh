module.exports = class PullDowd {
  constructor(opts) {
    this.wrap = opts.wrap || null;
  }

  init() {
    this.findEl();
  }

  findEl() {
    if (!this.wrap) {
      throw new Error('不存在元素');
    }
  }
};