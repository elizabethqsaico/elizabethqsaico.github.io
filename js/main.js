$(document).ready(initPage);

function initPage(){
	$("#menu a").click(changeView);
	TweenMax.to("#index",1,{autoAlpha:1});
}
function changeView(){
	var target = $(this).attr('href');
	TweenMax.to('.active', 1, {autoAlpha:0});

	$('.menu-item').removeClass('active');
	$(target).addClass('active');
	TweenMax.to(target, 1, {autoAlpha:1});
}