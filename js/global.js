$(function(){

	$('.button').each(
		function() {
			var jButton = $(this);
			var sExpandedContent = jButton.find('a').attr('title');
			var sPre = '<div class="tl"/><div class="tr"/>';
			var sPost = '<div class="expanded-content"></div><div class="bl"/><div class="br"/>';
			var sOffset = jButton.attr('offsetWidth');
			jButton.prepend(sPre).append(sPost).css('width', sOffset);
			jButton.find('.expanded-content').html(sExpandedContent);
			jButton.click(
				function() {
					$(this).find('.expanded-content').slideToggle('fast');
				}
			);
		}
	);

});