;(function($){
  $.fn.showsize = function(){

    var elements = this; //追記
    elements.each(function(){ //追記
      $(this).click(function(){ //変更
        var msg = $(this).width() + 'x' + $(this).height();
        $(this).wrap('<div class="img-box"></div>'); 
        var labelTxt = $('<div class="img-label">').text(msg);
        $(this).after(labelTxt);
      });
    });
    return this; //追記
  }
  //問題点：クリックし続けるとどんどん増える
})(jQuery);