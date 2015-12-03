;(function($){
  $.fn.showsize = function(){

    var elements = this;
    elements.each(function(){ 
      var flag = "default"; 
      $(this).click(function(){ 
        if(flag == "default"){ 
          $(this).wrap('<div class="img-box"></div>'); 
          var msg = $(this).width() + 'x' + $(this).height(); 
          var labelTxt = $('<div class="img-label">').text(msg); 
          $(this).after(labelTxt);
          flag = "changed"; 
        } 
      });
    });
    return this; 
    // 増やすのをやめる
  }
})(jQuery);