$(document).ready(function(){
	// 입력폼 포커스
	$(".actInbx").focusin(function(){
		$(".actInbx").removeClass("focus");
		$(this).addClass("focus");
	}).focusout(function(){$(this).removeClass("focus");});

	// Navi
	$(".wrapNavi .menuTop li a").on("click", function(){
		$(".wrapNavi .menuTop li a").removeClass("current");
		$(this).addClass("current");
	});

	// 탭메뉴
	$(".tabMenu a").click(function(){
		$(this).parent().addClass("current");
		$(this).parent().siblings().removeClass("current");

		// 클릭한 id값을 변수에 저장
		var tab = $(this).attr("href");
		// console.log(tab);

		// id값이 일치하지 않을 경우 hidden
		$(".tabCont").not(tab).css("display", "none");

		// id값이 일치할 경우 show
		$(tab).show();

		return false;
	});

});