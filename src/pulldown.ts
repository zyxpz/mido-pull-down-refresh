
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

  }

  public handleCreatDownEl() {
    return '<div class="test1">handleCreatDownEl</div>';
  }

}
