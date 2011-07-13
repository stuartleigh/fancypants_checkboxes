$.fn.fancypants_checkbox = function () {
  return this.each(function(){
    $(this).after('<div class="fp_cb_holder"><img src="toggle.png" alt="fancypants checkbox toggle" class="fp_cb_toggle" width="30" height="21" /><div class="fp_cb_inner"><div class="fp_cb_slider"><span class="fp_cb_yes" style="display:none;">yep</span><span class="fp_cb_no">nope</span></div></div></div>');
    var $toggle = $(this).next().find('.fp_cb_toggle'), $toggle_box = $(this).next();
    if($(this).is(':checked')){
      $toggle_box.data('is_checked', true);
      $toggle.css({
        left: $(this).next().width() - $toggle.width() + 7
      });
      $toggle.next().css({backgroundColor: '#a8ff00'});
      $toggle_box.find('.fp_cb_no').hide()
      $toggle_box.find('.fp_cb_yes').show()
    } else {
      $toggle_box.data('is_checked', false);
    }
    $toggle_box.click(function(){
      if($(this).data('is_checked')){
        $toggle.animate({
          left: 6
        }, 100);
        $toggle.next().animate({backgroundColor: '#ed1c24'}, 100);
        $toggle_box.find('.fp_cb_yes').fadeOut(100);
        $toggle_box.find('.fp_cb_no').fadeIn(100);
        $(this).data('is_checked', false);
        $(this).prev().click();
      } else {
        $toggle.animate({
          left: $(this).width() - $toggle.width() + 7
        }, 100);
        $toggle.next().animate({backgroundColor: '#a8ff00'}, 100);
        $toggle_box.find('.fp_cb_no').fadeOut(100);
        $toggle_box.find('.fp_cb_yes').fadeIn(100);
        $(this).data('is_checked', true);
        $(this).prev().click();
      }
    });
  });
};