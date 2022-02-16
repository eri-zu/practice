class Sound {
  constructor() {
    const soundOn = gb.u.u.getCookie('isSound');
    if (soundOn === 'true') {
      Howler.volume(1.0);
    } else {
      Howler.volume(0);
    }
  }

  on() {
    Howler.volume(1.0);
    gb.isSound = 'true';
    gb.u.u.setCookie('isSound', gb.isSound, 1 * 24 * 60 * 60 * 1000); //1日
  }

  off() {
    Howler.volume(0.0);
    gb.isSound = 'false';
    gb.u.u.setCookie('isSound', gb.isSound, 1 * 24 * 60 * 60 * 1000); //1日
  }
}

export default Sound;
