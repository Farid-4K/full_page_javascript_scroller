/**
 * @property container
 * @property pages[]
 * @property easing - easing function
 * @property duration
 * @property offset
 */
export default class PageScroller {
  scroll(direction) {
    this.allow = false;
    let offsets = Array.from(this.pages)
      .map(e => e.offsetTop)
      .map(e => this.container.scrollTop - e);

    let index = offsets.indexOf(
      offsets.reduce((prev, curr) =>
        Math.abs(curr) < Math.abs(prev) ? curr : prev
      )
    );

    index = direction === "next" ? index + 1 : index > 0 ? index - 1 : 0;
    index %= this.pages.length;

    let start = new Date().getTime();
    let startPoint = this.container.scrollTop;
    let endPoint =
      this.pages[index].offsetTop - startPoint - (this.offset || 0);
    new Promise(resolve => {
      const frame = () => {
        let time = new Date().getTime() - start;
        this.container.scrollTop =
          this.easing(time / this.duration) * endPoint + startPoint;
        if (time > this.duration) {
          resolve();
        } else {
          requestAnimationFrame(frame);
        }
      };
      requestAnimationFrame(frame);
    }).then(() => (this.allow = true));
  }

  keyboardEvent(event) {
    const allow = ["PageUp", "ArrowUp", "Space", "PageDown", "ArrowDown"];
    if (allow.includes(event.key)) {
      event.preventDefault();
    }
    switch (event.key) {
      case allow[0]:
      case allow[1]:
        this.allow && this.scroll("prev");
        break;
      case allow[2]:
      case allow[3]:
      case allow[4]:
        this.allow && this.scroll("next");
        break;
    }
  }

  mouseEvent(event) {
    if (this.allow) {
      event.deltaY >= 0 ? this.scroll("next") : this.scroll("prev");
    }
    event.returnValue = false;
    event.preventDefault();
    return false;
  }

  start() {
    document.addEventListener("keydown", this.keyboardEvent.bind(this));
    document.addEventListener("wheel", this.mouseEvent.bind(this), false);
  }

  constructor(options) {
    Object.assign(this, options);
    this.allow = true;
  }
}
