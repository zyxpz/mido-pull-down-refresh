function loop(): void { }
export default class PullDown {
  public wrap: HTMLElement;
  public pullHei: number;
  public pullDom: any;
  constructor(opts) {
    this.wrap = opts.wrap || null;
    this.pullHei = opts.pullHei || 40;
    this.pullDom = opts.pullDom() || this.handleCreatDownEl();
  }

  public init() {
    this.handleFindEl();
  }

  public handleFindEl() {
    if (!this.wrap) {
      throw new Error("不存在元素");
    }
    this.handlePullEl();
  }

  public handlePullEl() {
    const pullDom = document.createElement("div");

    pullDom.className = "pull-down-wrap";

    pullDom.innerHTML = this.pullDom;

    this.wrap.insertBefore(pullDom, this.wrap.childNodes[0]);

    this.wrap.style.cssText = `transform: translate3d(0, -${pullDom.offsetHeight}px, 0)`;
  }

  public handleCreatDownEl() {
    return '<div class="test1">handleCreatDownEl</div>';
  }

}
