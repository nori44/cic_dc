;(function($){
  $.fn.showsize = function(){

    var elements = this; 
    elements.each(function(){ 
      var flag = "default"; 
      $(this).click(function(){
        var msg = $(this).width() + 'x' + $(this).height(); //ver3
        var labelTxt = $('<div class="img-label">').text(msg); //ver3
        if(flag == "default"){ 
          $(this).wrap('<div class="img-box"></div>'); 
          $(this).after(labelTxt);
          flag = "changed"; 
        } else if(flag == "changed") { //ver3
          $('.img-label').remove();
          flag = "changed02";
        } else {
          $(this).after(labelTxt);
          flag = "changed";
        }
      });
    });
    return this; 
    //クリックするごとに切り替え、増やさない
  }
})(jQuery);