//$(document).ready(function(){ //htmlがドキュメントのこと
$( function(){
  $(window).scroll(function(){
    // 最上部から現在位置までの距離を取得して、変数[now]に格納
    var now = $( window ).scrollTop() ;
    console.log(now); 
    // 最上部から現在位置までの距離(now)が1500px以上だったら
    if( now > 500 ) {
      $( '#page-top' ).fadeIn( 'slow' ) ; //id属性はJS用に使っている
    } else {
      $( '#page-top' ).fadeOut( 'slow' ) ;
    }
  });
});