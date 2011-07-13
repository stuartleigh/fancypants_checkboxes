$.fn.fancypants_checkbox = function () {
  return this.each(function(){
    $(this).hide().after('<div class="fp_cb_holder"><img src="toggle.png" alt="fancypants checkbox toggle" class="fp_cb_toggle" /><div class="fp_cb_inner"><div class="fp_cb_slider"><span class="fp_cb_yes" style="display:none;">yep</span><span class="fp_cb_no">nope</span></div></div></div>');
    var $toggle = $(this).next().find('.fp_cb_toggle')
    $(this).next().toggle(function(){
		$toggle.animate({
			left: $(this).width() - $toggle.width() + 7
		}, 100);
		$toggle.next().animate({backgroundColor: '#a8ff00'}, 100);
		$toggle.parent().find('.fp_cb_no').fadeOut(100)
		$toggle.parent().find('.fp_cb_yes').fadeIn(100)
		$(this).prev().click();
	}, function(){
		$toggle = $(this).find('.fp_cb_toggle')
		$toggle.animate({
			left: 6
		}, 100);
		$toggle.next().animate({backgroundColor: '#ed1c24'}, 100)
		$toggle.parent().find('.fp_cb_yes').hide()
		$toggle.parent().find('.fp_cb_no').fadeIn(100)
		$(this).prev().click();
	});
  });
};