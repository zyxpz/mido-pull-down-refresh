function loop(): void { }
export default class PullDown {
  public wrap: HTMLElement;
  public pullDom: any;
  public pullMoveEvent: any;
  public pullEndEvent: any;
  private startPos: number;
  private endPos: number;
  private pullDomHei: number;
  constructor(opts) {
    this.wrap = opts.wrap || null;
    this.pullDom = opts.pullDom() || this.handleCreatDownEl(); // 渲染下拉模块
    this.pullMoveEvent = opts.pullMoveEvent || loop; // 拖动中的事件
    this.pullEndEvent = opts.pullEndEvent || loop; // 松手后的事件
  }

  public init() {
    this.handleFindEl();
  }

  private handleFindEl() {
    if (!this.wrap) {
      throw new Error("不存在元素");
    }
    this.handlePullEl();
  }

  private handlePullEl() {
    const pullDom = document.createElement("div");

    pullDom.className = "pull-down-wrap";

    pullDom.innerHTML = this.pullDom;

    this.wrap.insertBefore(pullDom, this.wrap.childNodes[0]);

    this.pullDomHei = pullDom.offsetHeight;

    this.wrap.style.cssText = `transform: translate3d(0, -${pullDom.offsetHeight}px, 0)`;

    this.handleMoveEventListener();
  }

  private handleCreatDownEl() {
    return '<div class="pull-refresh">下拉刷新</div>';
  }

  private handleMoveEventListener() {
    this.wrap.addEventListener("touchstart", this.handleTouchStart.bind(this));

    this.wrap.addEventListener("touchend", this.handleTouchEnd.bind(this));
  }

  private handleTouchStart(e) {
    this.startPos = e.touches[0].pageY;
    this.wrap.addEventListener("touchmove", this.handleTouchMove.bind(this));
  }

  private handleTouchMove(e) {
    this.endPos = e.touches[0].pageY;

    // 下拉
    if (this.startPos - this.endPos < 0) {
      if (Math.abs(this.startPos - this.endPos) >= this.pullDomHei * 2) {
        this.wrap.style.cssText = `transform: translate3d(0, ${this.pullDomHei}px, 0);`;
      } else {
        this.pullMoveEvent();

        this.wrap.style.cssText = `transform: translate3d(0, ${this.endPos - this.startPos - this.pullDomHei}px, 0);`;
      }
    }
  }

  private handleTouchEnd() {
    const isMove = Math.abs(this.startPos - this.endPos);

    if (isMove > this.pullDomHei) {
      this.pullEndEvent(() => {
        this.wrap.style.cssText = `transform: translate3d(0, -${this.pullDomHei}px, 0)`;
      });
    } else {
      this.wrap.style.cssText = `transform: translate3d(0, -${this.pullDomHei}px, 0)`;
    }
  }

}
