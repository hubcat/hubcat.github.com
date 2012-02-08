(function($){
		$('img').each(function(){
			var alt = $(this).attr('alt');
			if (alt == 'about'){
				$(this).after('<span class="caption">'+alt+'</span>').wrap('<a href="'+$(this).attr('src')+'" class="fancybox" title="'+alt+'" rel="gallery'+_i+'" />');
                //$(this).wrap('');
			} else {
				$(this).after('<span class="caption">'+alt+'</span>');
			}
		});

	$('.fancybox').fancybox();
})(jQuery);