;(function($){
  $.fn.showsize = function(){

    var elements = this; //追記
    elements.each(function(){ //追記
      var flag = "default";
      $(this).click(function(){ //変更
        if(flag == "default"){
        var msg = $(this).width() + 'x' + $(this).height();
        $(this).wrap('<div class="img-box"></div>'); 
        var labelTxt = $('<div class="img-label">').text(msg);
        $(this).after(labelTxt);
        flag = "changed";
        }
      });
    });
    return this; //追記
  }
})(jQuery);