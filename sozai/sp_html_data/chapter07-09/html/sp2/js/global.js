// documentの読み込み後に実行
$(document).ready(function(){
	iOSLabelBugfix();

	$("#openmenu").click(function(){
		$("#menu").height( $(document).height() );
		$("#menu").fadeIn("fast");
		return false;
	});

	$("#closemenu").click(function(){
		$("#menu").fadeOut("fast");
		return false;
	});

});

// iOS用のlabelバグフィックス
var iOSLabelBugfix = function(){
	$("label").click(function(){});
}