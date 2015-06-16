// documentの読み込み後に実行
$(document).ready(function(){
	initPagetop();
	iOSLabelBugfix();
});

// ページトップのアニメーション
var initPagetop = function(){
	$("a[href^='#_top']").click(function(){
		$("html,body").animate({ scrollTop:0 }, 600, 'swing', function(){});
		return false;
	});
}

// iOS用のlabelバグフィックス
var iOSLabelBugfix = function(){
	$("label").click(function(){});
}