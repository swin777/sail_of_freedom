$(document).ready(function(){

	var windowHeight = $(window).height()-64;
	$(".mapWrapper").css("height",windowHeight);

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

	$(".floatMenuRight .btnsBg").on("click", function(){
		$(".floatMenuRight").addClass("view");
		$(".dimmed").css("display","block");
		$(".floatMenuRight .rnb").css("z-index","101");
	});
	$(".floatMenuRight .btnClose").on("click", function(){
		$(".floatMenuRight").removeClass("view");
		$(".dimmed").css("display","none");
		$(".floatMenuRight .rnb").css("z-index","98");
	});
	$(".dimmedLnb").on("click", function(){
		console.log('asdf');
		$(".wrapLnb").removeClass("view");
		$(".dimmedLnb").css("display","none");
	});
	$(".btnBookmark").on("click", function(){
		$(this).toggleClass("on");
	});
	$(".lyBox .btnClose").on("click", function(){
		$(this).parent().css("display","none");
		$(".dimmed").css("display","none");
	});
	$(".lypop2 .btnClose").on("click", function(){
		$(this).parent().css("display","none");
		$(".dimmed").css("display","none");
	});
	$(".lypopTheme .btnClose").on("click", function(){
		$(this).parent().css("display","block");
		$(".lypopTheme").removeClass("view");
	});
	$(".listTheme button").on("click", function(){
		$(".listTheme button").removeClass("on");
		$(this).addClass("on");
	});
	$(".associationAreas button").on("click", function(){
		$(this).toggleClass("open");
	});
	$(".placeInfo li").on("click", function(){
		$(".placeInfo li").removeClass("current");
		$(this).addClass("current");
	});
	$(".routeSelect button").on("click", function(){
		$(".routeSelect button").removeClass("on");
		$(this).addClass("on");
	});
	$(".selWrap button").on("click", function(){
		$(this).parent().toggleClass("open");
	});
	$(".selWrap .selBox").on("click", function(){
		$(this).parent().removeClass("open");
	});

});

function fncLnbOpen(){
	$(".wrapLnb").addClass("view");
	$(".dimmedLnb").css("display","block");
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
function fncMyBookmark(){
	$(".lypopBookmark").css("display","block");
}
function fncCloseBookmark(){
	$(".lypopBookmark").css("display","none");
}
function fncCloseLnb(){
	$(".wrapLnb").removeClass("view");
	$(".lypopBookmark").css("display","none");
	$(".dimmedLnb").css("display","none");
}
function fnclypopShare(){
	$(".lypopShare").css("display","block");
	$(".dimmed").css("display","block");
}
function fnclypopTheme(){
	$(".lypopTheme").addClass("view");
	$(".dimmed").css("display","block");
}
function fncLypop2P1(){
	$("#lyPop2P1").css("display","block");
	$(".dimmed").css("display","block");
}
function fncLypop2P2(){
	$("#lyPop2P2").css("display","block");
	$(".dimmed").css("display","block");
}
function fncLypop2P3(){
	$("#lyPop2P3").css("display","block");
	$(".dimmed").css("display","block");
}
