$(function () {
  $(window).scroll(function () {
    var nowHight = $(window).scrollTop();
    console.log(nowHight);
    if (nowHight > 500) {
      $('.page-top').fadeIn();
    } else {
      $('.page-top').fadeOut();
    }
  });
  $('.page-top').click(function(){
    $('html,body').animate({scrollTop:0},'slow');
  });
});