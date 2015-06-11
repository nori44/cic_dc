
// リダイレクト処理
var ua = navigator.userAgent;
// smartphone
if ( (ua.indexOf('iPhone') > 0 && ua.indexOf('iPad') == -1) || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0 ) {
	//location.href = '../sp/index.html';
}
// tablet
else if( ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0 ){
}
// pc
else{
}

// documentの読み込み後に実行
$(document).ready(function(){
	initPagetop();
	initRollover();
	initLayout();
});

// ロールオーバーの指定
var initRollover = function(){
	var imgObj = new Object();
	$(".swap").each(function(i){
		var imgsrc = this.src;
		var dot = this.src.lastIndexOf('.');
		var imgsrc_on = this.src.substr(0, dot) + '_on' + this.src.substr(dot, 4);
		
		imgObj[this.src] = new Image();
		imgObj[this.src].src = imgsrc_on;
		
		$(this).hover( function() { this.src = imgsrc_on; }, function() { this.src = imgsrc; } );
	});
}

// ページトップのアニメーション
var initPagetop = function(){
	$("a[href^='#_top']").click(function(){
		$("html,body").animate({ scrollTop:0 }, 600, 'swing', function(){});
		return false;
	});
}

// #wrap要素の画像のローディング
var initLayout = function(){
	$('#wrap img').imgpreload({
		each: function(){},
		all: function(){
			heightControl( $("#side > .bg"), $("#main > .bgt > .bgb") );
		}
	});
}

// ボックスの高さ制御
var heightControl = function( boxa, boxb ){
	var h = Math.max( boxa.height(), boxb.height() );
	boxa.height( h + "px");
	boxa.height( h + "px");
}

// デバッグ
var debug = function($obj) {
	if (window.console && window.console.log) {
		window.console.log($obj);
	}
}