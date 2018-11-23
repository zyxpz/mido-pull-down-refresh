function loop(): void { }
export default class PullDown {
  public wrap: HTMLElement;
  public pullDom: any;
  public pullMoveEvent: any;
  public pullEndEvent: any;
  public down: boolean;
  public downDom: HTMLElement;
  private startPos: number;
  private endPos: number;
  private pullDomHei: number;
  constructor(opts) {
    this.wrap = opts.wrap || null;
    this.pullDom = opts.pullDom || this.handleCreatDownEl().defaultPullDom; // 渲染下拉模块
    this.pullMoveEvent = opts.pullMoveEvent || loop; // 拖动中的事件
    this.pullEndEvent = opts.pullEndEvent || loop; // 松手后的事件

    this.down = opts.down || false;
    this.downDom = opts.downDom || this.handleCreatDownEl().defaultDownDom; // 渲染上拉加载更多模块
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
    return {
      defaultDownDom: '<div class="mido-down-more">上拉加载更多</div>',
      defaultPullDom: '<div class="mido-pull-refresh">下拉刷新</div>',
    };
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
        if (!/mido\-pull\-refresh/.test(this.pullDom)) {
          this.pullMoveEvent();
        }

        this.wrap.style.cssText = `transform: translate3d(0, ${this.endPos - this.startPos - this.pullDomHei}px, 0);`;
      }
    }
  }

  private handleTouchEnd() {
    const isMove = Math.abs(this.startPos - this.endPos);

    if (isMove > this.pullDomHei) {
      if (!/mido\-pull\-refresh/.test(this.pullDom)) {
        this.pullEndEvent(() => {
          this.wrap.style.cssText = `transform: translate3d(0, -${this.pullDomHei}px, 0)`;
        });
      } else {
        this.wrap.style.cssText = `transform: translate3d(0, -${this.pullDomHei}px, 0)`;
      }

    } else {
      this.wrap.style.cssText = `transform: translate3d(0, -${this.pullDomHei}px, 0)`;
    }
  }

}
