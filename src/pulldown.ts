
function loop(): void { }
export default class PullDown {
  public wrap: HTMLElement;
  public pullDom: HTMLElement;
  constructor(opts) {
    this.wrap = opts.wrap || null;
    this.pullDom = opts.pullDom || loop;
  }

  public init() {
    this.handleFindEl();
  }

  public handleFindEl() {
    if (!this.wrap) {
      throw new Error("不存在元素");
    }
    this.wrap.innerHTML = this.handleCreatDownEl();
  }

  public handleCreatDownEl() {
    return '<div class="test1">handleCreatDownEl</div>';
  }

}
