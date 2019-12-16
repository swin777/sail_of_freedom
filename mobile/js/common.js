$(document).ready(function(){
	// 입력폼 포커스
	$(".actInbx").focusin(function(){
		$(".actInbx").removeClass("focus");
		$(this).addClass("focus");
	}).focusout(function(){$(this).removeClass("focus");});

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

	// RNB
	$(".floatMenuRight .btnsBg").on("click", function(){
		$(".floatMenuRight").addClass("view");
	});
	$(".floatMenuRight .btnClose").on("click", function(){
		$(".floatMenuRight").removeClass("view");
	});
	$(".dimmed").on("click", function(){
		$(".wrapLnb").removeClass("view");
		$(".dimmed").css("display","none");
	});

});

function fncLnbOpen(){
	$(".wrapLnb").addClass("view");
	$(".dimmed").css("display","block");
}
function fncLogin(){
	$("#loginBefore").css("display","none");
	$("#loginAfter").css("display","block");
	$(".lypopLogin").css("display","block");
}
function fncLogout(){
	$("#loginBefore").css("display","block");
	$("#loginAfter").css("display","none");
}
function fncLypooLoginClose(){
	$(".lypopLogin").css("display","none");
}
