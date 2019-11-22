$(document).ready(function(){
	// overlay scrollbars plugin
	var instances = OverlayScrollbars(document.querySelectorAll(".plugin-scrollbar"), {
		className : "os-theme-dark",
		scrollbars : {
			visibility       : "auto",
			autoHide         : "leave",
			autoHideDelay    : 800,
			dragScrolling    : true,
			clickScrolling   : true,
			touchSupport     : true,
			snapHandle       : false
		},
		textarea : {
			dynWidth       : false,
			dynHeight      : false,
			inheritedAttrs : ["style", "class"],
		}
	});

	// 입력폼 포커스
	$(".actInbx").focusin(function(){
		$(".actInbx").removeClass("focus");
		$(this).addClass("focus");
	}).focusout(function(){$(this).removeClass("focus");});

	// LNB
	$(".wrapSearch .menuLnb").on("click", function(){
		$(".wrapLnb").addClass("view");
	});
	$(".wrapLnb .btnClose").on("click", function(){
		$(".wrapLnb").removeClass("view");
	});
	// 검색 자동완성
	$(".wrapSearch input").on("click", function(){
		$(".searchList").css("display","block");
	});
	$(".searchList a").on("click", function(){
		// $(".searchList").css("display","none");
	});
	$(".searchList .btnOff").on("click", function(){
		$(".searchList>ul").css("display","none");
	});
	// 주소 선택
	$(".address a.current").on("click", function(){
		$(".adrsSelect").css("display","block");
	});
	$(".adrsSelect .btnWrap button").on("click", function(){
		$(".adrsSelect").css("display","none");
	});
	// 날씨정보 확장
	$(".weatherWrap a.current").on("click", function(){
		$(".weatherInfo").css("display","block");
	});

	// 지도 선택
	$(".mapType>button").on("click", function(){
		$(this).parent().toggleClass("open");
	});
	$(".mapType .list").on("click", function(){
		$(this).parent().toggleClass("open");
	});
	// 언어 선택
	$(".language>button").on("click", function(){
		$(this).parent().toggleClass("open");
	});
	$(".language .list").on("click", function(){
		$(this).parent().toggleClass("open");
	});
	// 내정보
	$(".myInfo .myphoto").on("click", function(){
		$(this).parent().toggleClass("open");
	});
	$(".snsLogin .btnClose").on("click", function(){
		$(".myInfo").removeClass("open");
	});
	// GNB
	$(".wrapGnb .btnToggle").on("click", function(){
		$(this).parent().toggleClass("small");
	});
	$(".wrapGnb li button").on("click", function(){
		$(this).parent().toggleClass("open");
	});
	// 확대축소 펼치기
	$(".btnFoldToggle").on("click", function(){
		$(".wrapZoom .btnsZoom").toggleClass("open");
	});
	// 미니맵
	$(".wrapMiniMap .btnToggle").on("click", function(){
		$(".wrapMiniMap").toggleClass("small");
	});

	// 검색결과
	$(".wrapSchResult .btnToggleWrap button").on("click", function(){
		$(this).parent().parent().toggleClass("hide");
	});
	$(".wrapSchResult .list li").on("click", function(){
		$(".wrapSchResult .list li").removeClass("current");
		$(this).addClass("current");
	});
	$(".wrapSchResult .sort button").on("click", function(){
		$(".wrapSchResult .sort button").removeClass("on");
		$(this).addClass("on");
	});
	$(".wrapSchResult .ic_bookmark").on("click", function(){
		$(this).toggleClass("on");
	});
	$(".associationAreas button").on("click", function(){
		$(this).toggleClass("open");
	});
	$(".wrapSchResult .wrapAddress .wrapTop .btnToggle").on("click", function(){
		$(".wrapSchResult .wrapAddress").toggleClass("hide");
	});
	$(".wrapSchResult.themeSch .btnDel").on("click", function(){
		$(".wrapSchResult.themeSch .searchList>ul").css("display","none");
	});

	// 검색결과 레이어팝업
	$(".lyBox .btnClose").on("click", function(){
		$(this).parent().css("display","none");
	});
	$(".listTheme button").on("click", function(){
		// $(this).toggleClass("on");
		$(".listTheme button").removeClass("on");
		$(this).addClass("on");
	});
	$(".listShare ul li button").on("click", function(){
		$(".listShare ul li button").removeClass("on");
		$(this).addClass("on");
	});
	$("#cate1 a").on("click", function(){
		$("#cate1 a").removeClass("on");
		$(this).addClass("on");
	});
	$("#cate2 a").on("click", function(){
		$("#cate2 a").removeClass("on");
		$(this).addClass("on");
	});
	$("#cate3 a").on("click", function(){
		$("#cate3 a").removeClass("on");
		$(this).addClass("on");
	});
	$(".addressFind .addressList a").on("click", function(){
		$(".addressFind .addressList a").removeClass("on");
		$(this).addClass("on");
	});

});


function fncShare(){
	$("#lypopShare").css("display","block");
}
function fncTheme(){
	$("#lypopTheme").css("display","block");
}
function fncInfoMod(){
	$("#lypopInfoMod").css("display","block");
}
function fncBookmark(){
	$("#lypopBookmark").css("display","block");
}
function fncBookmarkAdd(){
	$("#lypopBookmark").css("display","none");
	$("#lypopBookmarkAdd").css("display","block");
}
function fncGuest(){
	$("#lypopGuest").css("display","block");
}
function fncPrint(){
	$("#lypopPrint").css("display","block");
}
function fncCategoryReg(){
	$("#lypopCategoryReg").css("display","block");
}
function fncAddressFind(){
	$("#lypopAddressFind").css("display","block");
}
