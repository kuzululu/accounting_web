$(document).ready(function(){
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();

		if (scroll > 50) {
			$('#navbar').css('background','#555');
			$('#navbar a').css('color','white');
			$('#navbar a').css('transition','color 1s ease-in');
			$('#navbar').css('transition', 'background 1s ease-in');
		}else{
			// $('#navbar').css('background','url("img/bg.png")');
			$('#navbar').css('background','transparent');
			$('#navbar a').css('color','white');
			$('#navbar a').css('transition', 'color 1s ease-in');
			// $('#navbar').css('transition', 'background 1s ease-in');
		}
	});
});