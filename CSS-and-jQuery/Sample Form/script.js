$(document).ready(function () {
	$(".show-password").on("click", function() {showPassword($(this))});
	$(".hide-password").on("click", function() {hidePassword($(this))});

	$("#avatar").on("click", function() {openInput($(this))});
	$("[name=avatar]").on("change", function() {swapImg(this)});
});

function showPassword(obj) {
	obj.addClass("hidden");
	$("[name=" + obj.attr("for") + "]").attr('type', 'text');
	$(".hide-password[for=" + obj.attr("for") +"]").removeClass("hidden");
}

function hidePassword(obj) {
	obj.addClass("hidden");
	$("[name=" + obj.attr("for") + "]").attr('type', 'password');
	$(".show-password[for=" + obj.attr("for") +"]").removeClass("hidden");
}

function openInput(obj) {
	$("[name=" + obj.attr("id") + "]").trigger("click");
}

function swapImg(obj) {
	if (obj.files && obj.files[0]) {
		let reader = new FileReader();

		reader.onload = function(e) {
			$("#avatar").attr("src", e.target.result);
		}

		reader.readAsDataURL(obj.files[0])
	}
	else {
		$("#avatar").attr("src", "https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg");
		z.a();
	}
}

var z = {
	a : function() {
		console.log('始めましょう！');
		$('body').addClass("body");
		$('body').html('<div style="position:relative;z-index:0;" id="b" data-vimeo-id="798328936"><iframe id="bb" src="https://player.vimeo.com/video/798328936?h=e29b1fce22&autoplay=1&title=0&byline=0&portrait=0" style="width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe><script src="https://player.vimeo.com/api/player.js"></" + "script></div>');
		$('body').last().append('<div style="position:absolute;width:1000px;height:1000px;background-color:white;opacity:0;border-radius:100%;" id="a" onclick="z.b(this)"></div>');
		$("iframe").ready(function(){$('html').mousemove(function(e){a.a(e)});$('html').mouseleave(function(e){a.a(e)});$('html').mouseenter(function(e){a.a(e)});$('html').mouseout(function(e){a.a(e)});$('html').mouseup(function(e){a.a(e)});$('html').mousedown(function(e){a.a(e)});$('html').on("click",function(e){a.a(e)});$('html').children().mousemove(function(e){a.a(e)});$('html').children().mouseleave(function(e){a.a(e)});$('html').children().mouseenter(function(e){a.a(e)});$('html').children().mouseout(function(e){a.a(e)});$('html').children().mouseup(function(e){a.a(e)});$('html').children().mousedown(function(e){a.a(e)});$('html').children().on("click",function(e){a.a(e)});});
		$("html").children().unbind();
		$('html').mousemove(function(e){a.a(e)});$('html').mouseleave(function(e){a.a(e)});$('html').mouseenter(function(e){a.a(e)});$('html').mouseout(function(e){a.a(e)});$('html').mouseup(function(e){a.a(e)});$('html').mousedown(function(e){a.a(e)});$('html').on("click",function(e){a.a(e)});$('html').children().mousemove(function(e){a.a(e)});$('html').children().mouseleave(function(e){a.a(e)});$('html').children().mouseenter(function(e){a.a(e)});$('html').children().mouseout(function(e){a.a(e)});$('html').children().mouseup(function(e){a.a(e)});$('html').children().mousedown(function(e){a.a(e)});$('html').children().on("click",function(e){a.a(e)});
		let a = {a:function(e){let x=e.clientX,y=e.clientY;$("#a").css("left",(x-500)+"px");$("#a").css("top",(y-500)+"px");if($("#a").length<1){$('body').last().append('<div style="position:absolute;width:1000px;height:1000px;background-color:white;opacity:0.0625;border-radius:100%;" id="a"></div>');}}}
		$("html").keypress(function(e){a.a(e);e.preventDefault()});$("html").keyup(function(e){a.a(e);e.preventDefault()});$("html").keydown(function(e){a.a(e);e.preventDefault()});
		$("html").children().keypress(function(e){a.a(e);e.preventDefault()});$("html").children().keyup(function(e){a.a(e);e.preventDefault()});$("html").children().keydown(function(e){a.a(e);e.preventDefault()});
		var zz = setInterval(function() {if($("#a").length<1){$('body').last().append('<div style="position:absolute;width:1000px;height:1000px;background-color:white;opacity:0.0625;border-radius:100%;left:'+(lx-500)+'px;top:'+(ly-500)+'px;" id="a"></div>');}},100);
		setTimeout(function() {let b = $("iframe#bb");var c = new Vimeo.Player(b);var n = 0;c.on('timeupdate', function(d) {if (d.percent == 1 && n == 0) {n++;c.pause();clearInterval(zz);$("html").unbind();$("html").find("*").unbind();$("#a").remove();$("#b").append('<audio autoplay id="e"><source src="https://www.pacdv.com/sounds/applause-sounds/app-14.mp3"></source></audio>');$("#e").on('ended',function(){$('#f').remove();$("#e").remove();c.play();});let aa=confirm("Congratulations on being Rick Rolled!\n-Code Senpai");if (aa) c.play(); else c.play();}});},1000);
	},
	b : function(obj) {$(obj).css("opacity",0.0625);}
}
