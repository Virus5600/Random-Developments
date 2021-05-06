$(document).ready(function() {
	$(".readmore").ready(function() {
		let lines = $('.readmore').attr('data-rm-show-lines');
		
		if (lines == 'undefined' || lines == '' || lines == '0')
			return;
		
		$('.readmore').addClass("readmore-lines-" + lines);
	});

	$(".readmore-link").click(function(e) {
		// record if our text is expanded
		let isExpanded = $(e.currentTarget).hasClass("expand");
		let lines = $(e.currentTarget.parentNode).attr('data-rm-show-lines');
		
		//close all open paragraphs
		if (lines != 'undefined' || lines != '' || lines != '0')
			$(".readmore.expand").addClass("readmore-lines-" + lines);
		$(".readmore.expand").removeClass("expand");
		$(".readmore-link.expand").removeClass("expand");

		// if target wasn't expand, then expand it
		if (!isExpanded){
			if (lines != 'undefined' || lines != '' || lines != '0')
				$(e.currentTarget).parent(".readmore").removeClass("readmore-lines-" + lines);
			$(e.currentTarget).parent(".readmore").addClass("expand");
			$(e.currentTarget).addClass("expand");
		}
	});
});