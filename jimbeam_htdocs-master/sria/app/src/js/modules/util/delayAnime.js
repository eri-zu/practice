export default ($elm, duration = 100) => {
  return $elm.find('.jsDelayAnime').each(function(i){
    setTimeout(function(){
      $(this).addClass('jsShow');
    }.bind(this), duration * i);
    // console.log(i);
  });
};
