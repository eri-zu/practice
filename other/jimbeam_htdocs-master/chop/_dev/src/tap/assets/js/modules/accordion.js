import 'gsap';
// pugの構成
// .accordions ($container)
//   .header($header)
//   .contents($contents)
//     .inner($contents.children())

// scssの構成
// .accordions {
//   .contents {
//     overhlow: hidden;
//     .inner {
//       margin: 0;
//       padding: 0;
//     }
//   }
//   &.open {
//   }
// }


export default class Accordion {
  constructor({ $container, $header, $contents }) {
    this.$container = $container;
    this.$header = $header;
    this.$contents = $contents;
    this.isOpen = false;
    this.$contentsInner = this.$contents.children();
    this.duration = 0.5;
    this.easing = Power1.easeInOut;
  }
  setOpen() {
    const h = this.$contentsInner.outerHeight();
    this.$container.addClass('open');
    TweenMax.set(this.$contents, {
      height: h,
    });
    this.isOpen = true;
    $(window).resize();
  }
  open(callback) {
    const h = this.$contentsInner.outerHeight();
    this.$container.addClass('open');
    TweenMax.to(this.$contents, this.duration, {
      height: h,
      ease: this.easing,
      onComplete: () => {
        if (callback) { callback(); }
        this.isOpen = true;
        $(window).resize();
      },
    });
  }
  close(callback) {
    this.$container.removeClass('open');
    TweenMax.to(this.$contents, this.duration, {
      height: 0,
      ease: this.easing,
      onComplete: () => {
        if (callback) { callback(); }
        this.isOpen = false;
        $(window).resize();
      },
    });
  }
}
