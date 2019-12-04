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

	// Navi
	$(".wrapNavi .menuTop li a").on("click", function(){
		$(".wrapNavi .menuTop li a").removeClass("current");
		$(this).addClass("current");
	});
	$(".muchWayPoint").on("mouseover", function(){
		$(this).find(".iconsNavi").css("display", "none");
		$(this).find(".btnsNavi.btnAdd").css("display", "block");
	});
	$(".muchWayPoint").on("mouseout", function(){
		$(this).find(".iconsNavi").css("display", "block");
		$(this).find(".btnsNavi.btnAdd").css("display", "none");
	});
	$(".timeSetting a.current").on("click", function(){
		$(".timeSetting .innerBox").css("display","flex");
	});
	$(".timeSetting .innerBox").on("click", function(){
		$(this).css("display","none");
	});
	$(".wayPointSelect button").on("click", function(){
		$(".wayPointSelect button").removeClass("current");
		$(this).addClass("current");
	});

	// 탭메뉴
	$(".naviRoute .tabMenu a").click(function(){
		$(this).parent().addClass("current");
		$(this).parent().siblings().removeClass("current");

		// 클릭한 id값을 변수에 저장
		var tab = $(this).attr("href");
		// console.log(tab);

		// id값이 일치하지 않을 경우 hidden
		$(".naviRoute .tabCont").not(tab).css("display", "none");

		// id값이 일치할 경우 show
		$(tab).show();

		return false;
	});

	// LNB
	$(".menuLnb").on("click", function(){
		$(".wrapLnb").addClass("view");
	});
	$(".wrapLnb .btnClose").on("click", function(){
		$(".wrapLnb").removeClass("view");
	});
	$(".wrapMore").on("mouseover", function(){
		$(this).addClass("view");
	});
	$(".wrapMore").on("mouseout", function(){
		$(this).removeClass("view");
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
		$(".lyWeatherDust").css("display","block");
	});
	$(".weatherSimple").on("click", function(){
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
	$(".lyDimInner .lyBox .btnClose").on("click", function(){
		$(this).parent().parent().css("display","none");
		$(this).parent().css("display","block");
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

	// 원네비
	$(".wrapOnenaviSimul .btnPlay").on("click", function(){
		$(this).toggleClass("btnPause");
	});
	$(".wrapOnenaviSimul .zoom").on("mouseover", function(){
		$(this).addClass("open");
	});
	$(".wrapOnenaviSimul .volumeWrap").on("mouseover", function(){
		$(this).addClass("open");
	});
	$(".wrapOnenaviSimul .zoom").on("mouseout", function(){
		$(this).removeClass("open");
	});
	$(".wrapOnenaviSimul .volumeWrap").on("mouseout", function(){
		$(this).removeClass("open");
	});
	$(".wrapOnenaviSimul .btnScreen").on("click", function(){
		$(".wrapOnenaviSimul").toggleClass("fullscreen");
	});
	$(".choiceColor .sticker").on("click", function(){
		$(".choiceColor .sticker").removeClass("select");
		$(this).addClass("select");
	});
	$(".choiceShape .sticker").on("click", function(){
		$(".choiceShape .sticker").removeClass("select");
		$(this).addClass("select");
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
function fncContinueView(){
	$("#lypopContinueView").css("display","block");
}
function fncOneNavi(){
	$("#lypopOneNavi").css("display","block");
}
function fncOneNaviWith(){
	$("#lypopOneNaviWith").css("display","block");
}
function fncRouteSearch(){
	$("#lypopRouteSearch").css("display","block");
}
function fncRouteTheme(){
	$("#lypopRouteTheme").css("display","block");
}
function fncMyBookmark(){
	$(".wrapLnb").removeClass("view");
	$("#lnbMyBookmark").addClass("view");
}
function fncMyBookmarkClose(){
	$("#lnbMyBookmark").removeClass("view");
	$(".wrapLnb").addClass("view");
}
function fncMyPlace(){
	$("#lnbMyBookmark").removeClass("view");
	$("#lnbMyPlace").addClass("view");
}
function fncProcessing(){
	$(".wrapLnb").removeClass("view");
	$("#lnbProcessing").addClass("view");
}
function fncProcessingClose(){
	$(".wrapLnb").addClass("view");
	$("#lnbProcessing").removeClass("view");
}
function fncMyPlaceMod(){
	$("#lnbMyPlace").removeClass("view");
	$("#lnbMyPlaceMod").addClass("view");
}
function fncOnenaviBookmark(){
	$("#lnbMyBookmark").removeClass("view");
	$("#lnbOnenaviBookmark").addClass("view");
}
function fncMyPlaceClose(){
	$("#lnbMyPlace").removeClass("view");
	$("#lnbMyBookmark").addClass("view");
}
function fncMyPlaceModClose(){
	$("#lnbMyPlaceMod").removeClass("view");
	$("#lnbMyPlace").addClass("view");
}
function fncOnenaviBookmarkClose(){
	$("#lnbOnenaviBookmark").removeClass("view");
	$("#lnbMyBookmark").addClass("view");
}
function fncListNameMod(){
	$("#lypopListNameMod").css("display","block");
}
function fncStickerChange(){
	$("#lypopStickerChange").css("display","block");
}
function fncStickerChange2(){
	$("#lypopStickerChange2").css("display","block");
}
function fncBookmarkMod(){
	$("#lypopBookmarkMod").css("display","block");
}
