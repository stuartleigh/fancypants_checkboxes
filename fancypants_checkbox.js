$.fn.fancypants_checkbox = function () {
  return this.each(function(){
    $(this).hide().after('<div class="fancy_checkbox"></div>');
    $(this).next().bind('click', function(){
      $(this).prev().click();
    });
  });
};