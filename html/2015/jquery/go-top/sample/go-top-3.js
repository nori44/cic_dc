var syncerTimeout = null ;
//$(document).ready(function(){ //htmlがドキュメントのこと
$( function() {
  $(window).scroll(function(){
    
    if( syncerTimeout == null ){
			// セットタイムアウトを設定
			syncerTimeout = setTimeout( function(){
        // 最上部から現在位置までの距離を取得して、変数[now]に格納
        var now = $( window ).scrollTop() ;
        console.log(now); 
        var element = $( '#page-top' ) ;
        var visible = element.is( ':visible' ) ;
        if( !visible ){
          if( now > 500 ) {// 最上部から現在位置までの距離(now)が500px以上だったら
            element.fadeIn( 'slow' ) ;
          }
				}else if( visible ){
          element.fadeOut( 'slow' ) ;
        }
        syncerTimeout = null ;
			} , 100 ) ;
    }
  });
  $( '#move-page-top' ).click(function(){
    // [id:move-page-top]をクリックしたら起こる処理
    $( 'html,body' ).animate( {scrollTop:0} , 'slow' ) ;
  }) ;
});