//--------------------------------------------------
//
//  Render
//
//--------------------------------------------------

export default class Render {
  constructor(parent) {
    this.$wrap = $("html");
    this.setup();
    this.setEvents();
  }

  setup() {
    $(".section01")[0].style.height = window.innerHeight + "px";
  }

  add() {}

  show() {
    this.$target = $(".loading");
    const $shape = $(".loading .shape");
    const $inner = $(".loading .inner");
    // const $shape = this.$target.find('.shape');
    // const $shape = this.$target.

    TweenMax.set($shape, { opacity: 0, scale: 0.7 });
    TweenMax.set($shape[0], { "transform-origin": "50% 75%" });

    var tll = new TimelineMax({ delay: 1.0 });

    tll
      .to($inner, 1.2, {
        opacity: 1,
        y: 0,
        ease: Expo.easeOut
      })

      // shapes
      .add(() => {
        this.tl1 = new TimelineMax({
          repeat: -1,
          delay: 0.7 * 0,
          repeatDelay: 1.2
        });
        this.tl2 = new TimelineMax({
          repeat: -1,
          delay: 0.7 * 1,
          repeatDelay: 1.2
        });
        this.tl3 = new TimelineMax({
          repeat: -1,
          delay: 0.7 * 2,
          repeatDelay: 1.2
        });

        this.tl1
          .set($shape[0], { rotation: -180 * 0.15 })
          .to(
            $shape[0],
            0.6,
            {
              scale: 1,
              opacity: 1,
              rotation: 0,
              ease: Expo.easeOut
            },
            0.0
          )
          .to(
            $shape[0],
            0.3,
            {
              scale: 0.7,
              opacity: 0.0,
              rotation: 180 * 0.15,
              ease: Expo.easeInOut
            },
            0.6
          );

        this.tl2
          .set($shape[1], { rotation: -180 * 0.35 })
          .to(
            $shape[1],
            0.6,
            {
              scale: 1,
              opacity: 1,
              rotation: 0,
              ease: Expo.easeOut
            },
            0.0
          )
          .to(
            $shape[1],
            0.3,
            {
              scale: 0.7,
              opacity: 0.0,
              rotation: 180 * 0.35,
              ease: Expo.easeInOut
            },
            0.6
          );

        this.tl3
          .set($shape[2], { rotation: -180 * 0.35 })
          .to(
            $shape[2],
            0.6,
            {
              scale: 1,
              opacity: 1,
              rotation: 0,
              ease: Expo.easeOut
            },
            0.0
          )
          .to(
            $shape[2],
            0.3,
            {
              scale: 0.7,
              opacity: 0.0,
              rotation: 180 * 0.35,
              ease: Expo.easeInOut
            },
            0.6
          );

        // hide
        // clearTimeout(this.Timer);
        // this.Timer = setTimeout(() => {
        //   this.hide(true);
        // }, 3000);
      }, 0.2);
  }

  update(e) {}

  hide(cb) {
    var tl = new TimelineMax();

    tl.to(
      $(".loading .inner"),
      1.2,
      {
        opacity: 0,
        y: -15,
        ease: Expo.easeOut
      },
      0.0
    )
      .to(
        this.$target,
        0.8,
        {
          opacity: 0,
          // scale: 0.,
          ease: Power4.easeOut,
          onComplete: () => {
            // $(".loading").remove();
            // while ($(".loading").firstChild)
            //   $(".loading").removeChild($(".loading").firstChild);
            this.tl1.kill();
            this.tl2.kill();
            this.tl3.kill();
            // $(window).trigger("loadingEnd");
          }
        },
        0.0
      )
      .add(e => {
        cb();
      });
  }

  setEvents() {}
}
