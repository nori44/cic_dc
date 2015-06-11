// documentの読み込み後に実行
$(document).ready(function(){
	iOSLabelBugfix();
});

// iOS用のlabelバグフィックス
var iOSLabelBugfix = function(){
	$("label").click(function(){});
}