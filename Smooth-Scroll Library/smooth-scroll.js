$(document).ready(function() {
	$("head").append(`<style type="text/css">\n\thtml {\n\t\tscroll-behavior: smooth!important;\n\t}\n</style>`);
	
	$("[data-scroll-to]").click(function(e) {
		let element = $($(this).attr("data-scroll-to")).position();
		window.scrollTo(element.left, element.top);
	});
});