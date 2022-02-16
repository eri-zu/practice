export default (id) => {
  let flg = false;
  let timer = null;

  const target = document.getElementById(id);

  target.addEventListener('touchstart', function(e) {
    if (flg) {
      e.preventDefault();
    }
  });

  target.addEventListener('touchend', function() {
    if (flg === false) {
      flg = true;
      clearTimeout(timer);
      timer = setTimeout(function() {
        flg = false;
      }, 220);
    }
  });
}
