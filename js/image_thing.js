jQuery.noConflict();
jQuery(document).ready(function ($) {
	var lastScrollTop = 0;
	var mode = 1;
	var view = 1;
	var dView = 1;
	var view4Top = $("#view4").position().top;
	var dView4Top = $("#view4").position().top;

    console.log($('#expandCircleMobile').height(), '@', $('#view3').height())
    $('#view3').css('top', ($('#expandCircleMobile').height()-$('#view3').height())/2+'px');
    $('.waves').on("load", function() {
        if ($("body").width() < 512) {
            $(".waves").css("top", parseInt($(".waves").height() - 1) * -1 + "px");
         }
    });
    $("#loaderTable, #loaderTableClone").delay(500).animate({
        width: "100dvw",
    },2000);

    $("#loaderTable").animate({
        top: "-10%",
    },2000);

    $("#loaderTableClone").animate({
        top: "110%",
    }, 2000);

    $("#topCurtain").delay(2500).animate({
        top: "-51%",
    }, 2000);

    $("#botCurtain").delay(2500).animate({
        bottom: "-51%",
    }, 2000);

	$("html, body").animate(
		{
			scrollTop: 0,
		},
		"slow"
	);

	$(".dWhyUs").fadeOut(0);
	$("#dWhyUsClose").fadeOut(0);

	$("img").attr("alt", "Alternative text");

	$("#bigScreen").css("width", "80%");
	$("#feedbackContainer").css("height", $("#feedbackContainer").height());
	document.getElementById("triangle").style.borderBottomWidth =
		parseInt($("#feedbackContainer").height()) + 1 + "px";

	$("#bigScreen").css(
		"height",
		($("#bigScreen").css("width") * 300) / 819.2 + "px"
	);

	let sizeRatio = $("#bigScreen").width() / 819.2;
	$("#bigScreen div").css(
		"backgroundSize",
		"" + sizeRatio * 1280 + "px " + sizeRatio * 853 + "px"
	);

	let top = (100 - ($("#bigScreen").height() / $("body").height()) * 100) / 2;
	$("#bigScreen").css("top", top + "%");

	//$('.image-box').css('backgroundSize', 221/($('#re').height()/$('#re').width())+'%');
	$(".slider-circle").css("height", $(".slider-circle").width() + "px");
	$("#slider-cont-ii").fadeOut(0);

	$("#view8").css("height", $("#content").height() + "px");
	$("html, body").css("overflowY", "hidden");

	var yui = 0;
	if ($("body").width() < 512) {
	    //var elem = document.getElementsByTagName("body")[0];
        //elem.requestFullscreen();

		$(".waves").css("top", parseInt($(".waves").height() - 1) * -1 + "px");
		$("#view8").css("top", parseInt($("#view7").height()) + 180 + "px");
		$("#view8 #content h5").css(
			"top",
			parseInt($("#content").height() / 100) * 100 + "px"
		);
		$("#falseContainer").scroll(function () {
			if (yui == 0) {
				$("#falseContainer").scrollTop(200000);
				yui = 1;
			}
			let st = $(this).scrollTop();

			if (st > lastScrollTop) {
				//Upscroll Code
				var i = 0;
				yui = 1;
				if (
					view == 1 &&
					$("#expandCircle").width() <= 0 &&
					$("#caption").css("opacity") == "0"
				) {
					$("#falseContainer").css("overflowY", "hidden");
					$("#shade").animate(
						{
							opacity: "0",
						},
						2000
					);

					document.getElementById("caption").style.opacity = "1";
					document.getElementById("caption").style.transition =
						"all 2s";

					if (mode == 1) {
						var x = setInterval(function () {
							document.getElementsByClassName("image-box")[
								i
							].style.transform = "rotateX(90deg)";
							document.getElementsByClassName("image-box")[
								i
							].style.opacity = "0";
							document.getElementsByClassName("image-box")[
								i
							].style.transition = "all 2s";
							i++;
							if (i == 5) {
								setTimeout(function () {
									$("#falseContainer").css(
										"overflowY",
										"auto"
									);
									view = 2;
								}, 2500);

								clearInterval(x);
							}
						}, 100 * i);
					}
				}

				if (view == 2 && $("#expandCircle").width() <= 0) {
					$("#falseContainer").css("overflowY", "hidden");
					$("#bars").css("color", "#000");
					$("#expandCircle").animate(
						{
							width: "100dvw",
							height: "150dvh",
							top: "0",
							bottom: "0",
							borderRadius: "0",
						},
						1500
					);
					$("#expandCircleMobile").delay(1000).animate(
						{
							opacity: "1",
						},
						1000
					);

					setTimeout(function () {
						view4Top = $("#view4").position().top;
						$("#falseContainer").css("overflowY", "auto");
						console.log("UpSet3");
						view = 3;
					}, 2000);
				}

				if (view == 3 && $("#view4").position().top == view4Top) {
					$("#falseContainer").css("overflowY", "hidden");
					$("#view4").animate(
						{
							//top: parseInt((10/100*$('body').height())-1+'px')
							top: "13dvh",
						},
						1000
					);

					let ab = 0;
					var abc = setInterval(function () {
						document.getElementsByClassName("sub-span")[
							ab
						].style.opacity = "1";
						document.getElementsByClassName("sub-span")[
							ab
						].style.transition = "all 2s";

						if (ab >= 4) {
							clearInterval(abc);
						}
						ab++;
					}, 250);

					setTimeout(function () {
						if (parseInt($("body").width()) <= 375) {
							document.getElementById("macbook").style.transform =
								"scale(0.6)";
							document.getElementById("macbook").style.filter =
								"blur(3px)";
							document.getElementById(
								"macbook"
							).style.transition = "all 2s";
						} else {
							document.getElementById("macbook").style.transform =
								"scale(0.8)";
							document.getElementById("macbook").style.filter =
								"blur(3px)";
							document.getElementById(
								"macbook"
							).style.transition = "all 2s";
						}
					}, 800);

					setTimeout(function () {
						view4Top = $("#view4").position().top;
					}, 1100);
					setTimeout(function () {
						$("#view5").css("display", "block");
						$("#falseContainer").css("overflowY", "auto");
						console.log("UpSet4");
						view = 4;
					}, 2250);
				}

				if (view == 4 && $("#v5check").css("display") == "block") {
					if ($("#qu").css("opacity") == "0") {
						$("#falseContainer").css("overflowY", "hidden");
						$("#v5check").css("display", "none");
						document.getElementById("macbook").style.transform =
							"scale(1) translateX(-150%)";
						document.getElementById("sub1").style.transform =
							"translateX(-150%)";
						document.getElementById("macbook").style.filter =
							"blur(0px)";
						document.getElementById("macbook").style.transition =
							"all 1s";
						document.getElementById("sub1").style.transition =
							"all 1.5s";

						setTimeout(function () {
							$("#v5check").css("display", "block");
							$("#view5").css("top", "13dvh");

							$("#qu").css("display", "block");
							$("#cr").css("display", "block");
							$("#qu").animate(
								{
									opacity: "1",
								},
								1000
							);
							$("#cr").delay(250).animate(
								{
									opacity: "1",
								},
								1000
							);
						}, 1000);

						setTimeout(function () {
							$("#v5check").css("display", "block");
							view4Top = $("#view4").position().top;
							$("#falseContainer").css("overflowY", "auto");
							console.log("UpSet51");
							view = 51;
						}, 1500);
					}
				}

				if (view == 51 && $("#v5check").css("display") == "block") {
					if (
						$("#qu").css("opacity") == "1" &&
						$("#qu").css("display") == "block"
					) {
						$("#falseContainer").css("overflowY", "hidden");
						$("#v5check").css("display", "none");
						$("#qu").css("display", "none");
						$("#cr").css("display", "none");
						$("#qu").css("opacity", "0");
						$("#cr").css("opacity", "0");

						$("#mo").animate(
							{
								opacity: "1",
							},
							1000
						);
						$("#su").delay(250).animate(
							{
								opacity: "1",
							},
							1000
						);

						setTimeout(function () {
							$("#v5check").css("display", "block");
							$("#falseContainer").css("overflowY", "auto");
							console.log("UpSet52");
							view = 52;
						}, 1250);
					}
				}

				if (view == 52 && $("#v6check").css("display") == "block") {
					$("#falseContainer").css("overflowY", "hidden");
					$("#v6check").css("display", "none");
					document.getElementById("flash").style.left = "0%";
					document.getElementById("flash").style.transition =
						"left 1s";
					setTimeout(function () {
						document.getElementById("view6").style.display =
							"block";

						document.getElementById("flash").style.width = "0%";
						document.getElementById("flash").style.transition =
							"width 1s";
					}, 900);
					setTimeout(function () {
						$("#falseContainer").css("overflowY", "auto");
						console.log("UpSet6");
						view = 6;
					}, 1000);
				}

				if (view == 6 && $("#view7").css("display") == "none") {
					$("html, body").css("overflowY", "auto");
					$("#expandCircleMobile").css("display", "none");
					document.getElementsByTagName(
						"body"
					)[0].style.backgroundColor = "#fff";

					$("#view7").css("display", "block");
					$("#view7").animate(
						{
							opacity: "1",
						},
						"slow"
					);

					$("#view6").animate(
						{
							opacity: "0",
						},
						1000
					);
					setTimeout(function () {
						document.getElementById("view7").style.zIndex = "4";
					}, 1100);
					setTimeout(function () {
						document.getElementById(
							"falseContainer"
						).style.display = "none";
					}, 900);
					setTimeout(function () {
						console.log("UpSet7");
						view = 7;
					}, 1200);
				}
			} else {
				//Downscroll Code
				var i = 0;
				if (
					view == 2 &&
					$("#expandCircle").width() <= 0 &&
					$("#shade").css("opacity") == 0
				) {
					$("#shade").css("opacity", "1");

					document.getElementById("caption").style.opacity = "0";
					document.getElementById("caption").style.transition =
						"all 2s";

					if (mode == 0) {
						$("#slider-cont").fadeIn(1000);

						var x = setInterval(function () {
							if (i == 1 || i == 3) {
								document.getElementsByClassName("image-box")[
									i
								].style.transform =
									"rotateX(0deg) translateX(-20%)";
							}
							if (i == 2) {
								document.getElementsByClassName("image-box")[
									i
								].style.transform =
									"rotateX(0deg) translateX(20%)";
							}
							if (i == 0 || i == 4) {
								document.getElementsByClassName("image-box")[
									i
								].style.transform = "rotateX(0deg)";
							}
							document.getElementsByClassName("image-box")[
								i
							].style.opacity = "1";
							document.getElementsByClassName("image-box")[
								i
							].style.transition = "all 2s";
							i++;
							if (i == 5) {
								setTimeout(function () {
									$("#shade").css("opacity", "1");
									console.log("DownSet1");
									view = 1;
								}, 2000);
								clearInterval(x);
							}
						}, 100 * i);
					}
					if (mode == 1) {
						$("#slider-cont-ii").fadeIn(1000);

						var x = setInterval(function () {
							document.getElementsByClassName("image-box")[
								i
							].style.transform = "rotateX(0deg)";
							document.getElementsByClassName("image-box")[
								i
							].style.opacity = "1";
							document.getElementsByClassName("image-box")[
								i
							].style.transition = "all 2s";
							i++;
							if (i == 5) {
								setTimeout(function () {
									console.log("DownSet1");
									view = 1;
								}, 2500);
								clearInterval(x);
							}
						}, 100 * i);
					}
				}

				if (
					view == 3 &&
					$("#expandCircle").width() == $("body").width()
				) {
					$("#bars").css("color", "#fff");
					$("#expandCircle").animate(
						{
							width: "0dvw",
							height: "0dvh",
							top: "50%",
							bottom: "50%",
							//borderRadius: '100%'
						},
						1500
					);
					$("#expandCircleMobile").animate(
						{
							opacity: "0",
						},
						500
					);
					setTimeout(function () {
						console.log("DownSet2");
						view = 2;
					}, 2000);
				}

				if (view == 4 && $("#view4").position().top == view4Top) {
					$("#view4").animate(
						{
							top: "110%",
						},
						1000
					);

					let ab = 0;
					var abc = setInterval(function () {
						document.getElementsByClassName("sub-span")[
							ab
						].style.opacity = "0";
						document.getElementsByClassName("sub-span")[
							ab
						].style.transition = "all 2s";

						if (ab >= 4) {
							clearInterval(abc);
						}
						ab++;
					}, 250);

					setTimeout(function () {
						document.getElementById("macbook").style.transform =
							"scale(1)";
						document.getElementById("macbook").style.filter =
							"blur(0px)";
						document.getElementById("macbook").style.transition =
							"all 2s";
					}, 800);
					setTimeout(function () {
						view4Top = $("#view4").position().top;
						console.log("DownSet3");
						view = 3;
					}, 2250);
				}

				if (view == 51 && $("#v5check").css("display") == "block") {
					if (
						$("#qu").css("opacity") == "1" &&
						$("#qu").css("display") == "block"
					) {
						$("#v5check").css("display", "none");

						$("#view5").css("top", "110%");
						view4Top = $("#view4").position().top;

						document.getElementById("macbook").style.transform =
							"scale(0.8) translateX(0%)";
						document.getElementById("macbook").style.filter =
							"blur(4px)";
						document.getElementById("macbook").style.transition =
							"all 1.5s";

						document.getElementById("sub1").style.transform =
							"translateX(-0%)";
						document.getElementById("sub1").style.transition =
							"all 1.5s";

						setTimeout(function () {
							$("#v5check").css("display", "block");
							$("#qu").css("display", "none");
							$("#cr").css("display", "none");
							$("#qu").animate(
								{
									opacity: "0",
								},
								1000
							);
							$("#cr").delay(250).animate(
								{
									opacity: "0",
								},
								1000
							);
						}, 1000);
						setTimeout(function () {
							console.log("DownSet4");
							view = 4;
						}, 2250);
					}
				}

				if (view == 52 && $("#v5check").css("display") == "block") {
					if ($("#qu").css("display") == "none") {
						$("#v5check").css("display", "block");
						$("#qu").css("display", "block");
						$("#cr").css("display", "block");
						$("#qu").animate(
							{
								opacity: "1",
							},
							1000
						);
						$("#cr").delay(250).animate(
							{
								opacity: "1",
							},
							1000
						);

						$("#mo").css("opacity", "0");
						$("#su").css("opacity", "0");
						setTimeout(function () {
							$("#v5check").css("display", "block");
						}, 1000);

						setTimeout(function () {
							console.log("DownSet51");
							view = 51;
						}, 1000);
					}
				}

				if (view == 6 && $("#v6check").css("display") == "none") {
					$("html, body").css("overflowY", "hidden");
					document.getElementById("v6check").style.display = "block";
					document.getElementById("flash").style.width = "100%";
					document.getElementById("flash").style.left = "0%";

					$("#flash").delay(900).animate(
						{
							left: "100%",
						},
						1000
					);
					setTimeout(function () {
						document.getElementById("view6").style.display = "none";
					}, 900);
					setTimeout(function () {
						console.log("DownSet52");
						view = 52;
					}, 1000);
				}
			}
			lastScrollTop = st;
		});

		$(window).scroll(function () {
			if (
				view == 7 &&
				$("#expandCircleMobile").css("display") == "none" &&
				$("html, body").scrollTop() <= 0
			) {
			    $("html, body").css("overflowY", "hidden");
				$("#expandCircleMobile").css("display", "block");
				document.getElementsByTagName("body")[0].style.backgroundColor =
					"#121212";

				$("#view7").animate(
					{
						opacity: "0",
					},
					"slow"
				);

				$("#view6").animate(
					{
						opacity: "1",
					},
					0
				);

				setTimeout(function () {
					$("#view7").css("display", "none");
					document.getElementById("falseContainer").style.display =
						"block";
				}, 600);
				setTimeout(function () {
					console.log("DownSet6");
					view = 6;
				}, 600);
			}
		});
		$("#slider-cont").click(function () {
			$("#slider-circle, #slider-circle-ii").animate(
				{
					left: "55%",
				},
				500
			);
			for (
				i = 0;
				i < document.getElementsByClassName("image-box").length;
				i++
			) {
				document.getElementsByClassName("image-box")[
					i
				].style.transform = "translateX(0%)";
				document.getElementsByClassName("image-box")[
					i
				].style.backgroundPosition = "50% " + i * 25 + "%";
				document.getElementsByClassName("image-box")[
					i
				].style.transition = "all 1s";
			}
			$("#slider-cont-ii").delay(500).fadeIn(500);
			$("#slider-cont").delay(500).fadeOut(500);
			mode = 1;
		});

		$("#slider-cont-ii").click(function () {
			$("#slider-circle, #slider-circle-ii").animate(
				{
					left: "7%",
				},
				500
			);
			for (
				i = 0;
				i < document.getElementsByClassName("image-box").length;
				i++
			) {
				if (i == 1 || i == 3) {
					document.getElementsByClassName("image-box")[
						i
					].style.transform = "translateX(-20%)";
					document.getElementsByClassName("image-box")[
						i
					].style.backgroundPosition = "10% " + i * 25 + "%";
				}
				if (i == 2) {
					document.getElementsByClassName("image-box")[
						i
					].style.transform = "translateX(20%)";
					document.getElementsByClassName("image-box")[
						i
					].style.backgroundPosition = "90% " + i * 25 + "%";
				}
				if (i == 0 || i == 4) {
					document.getElementsByClassName("image-box")[
						i
					].style.transform = "translateX(0%)";
					document.getElementsByClassName("image-box")[
						i
					].style.backgroundPosition = "50% " + i * 25 + "%";
				}
				document.getElementsByClassName("image-box")[
					i
				].style.transition = "all 1s";
			}
			$("#slider-cont").delay(500).fadeIn(500);
			$("#slider-cont-ii").delay(500).fadeOut(500);
			mode = 0;
		});
	} else {
		//Screens Greater Than 1024px
		$("#falseContainer").scroll(function () {
			let st = $(this).scrollTop();
			if (st > lastScrollTop) {
				if (dView == 1) {
					$("#falseContainer").css("overflowY", "hidden");
					let ty = 1;
					document.getElementsByClassName("ffgh")[0].style.opacity =
						"0";
					document.getElementsByClassName(
						"ffgh"
					)[0].style.transition = "all 1s";

					document.getElementsByClassName(
						"bigScreenText"
					)[0].style.opacity = "0";
					document.getElementsByClassName(
						"bigScreenText"
					)[1].style.opacity = "0";
					document.getElementsByClassName(
						"bigScreenText"
					)[0].style.transition = "all 1s";
					document.getElementsByClassName(
						"bigScreenText"
					)[1].style.transition = "all 1s";
					var tyx = setInterval(function () {
						document.getElementsByClassName("ffgh")[
							ty
						].style.opacity = "0";
						document.getElementsByClassName("ffgh")[
							ty
						].style.transition = "all 1s";

						ty++;
						if (ty == 5) {
							clearInterval(tyx);
						}
					}, 250);

					setTimeout(function () {
						document.getElementById("caption").style.opacity = "1";
						document.getElementById("caption").style.transition =
							"all 2s";
					}, 1000);
					setTimeout(function () {
						$("#falseContainer").css("overflowY", "auto");
						dView = 2;
					}, 2000);
				}
				if (dView == 2 && $("#expandCircle").width() == 0) {
					$("#falseContainer").css("overflowY", "hidden");
					$("#expandCircle").animate(
						{
							width: "100dvw",
							height: "100dvh",
							top: "0",
							bottom: "0",
							borderRadius: "0px",
						},
						1500
					);
					$("#expandCircleTop").delay(1000).animate(
						{
							opacity: "1",
						},
						1000
					);

					$(".tc a").delay(1000).css("color", "#000");
					$(".tc a").css("font-weight", "600");
					setTimeout(function () {
						view4Top = $("#view4").position().top;
						$("#falseContainer").css("overflowY", "auto");
						dView = 3;
					}, 2000);
				}
				if (dView == 3 && $("#dv4Checker").css("display") == "none") {
					$("#falseContainer").css("overflowY", "hidden");
					$("#dv4Checker").css("display", "block");
					$("html, body").css("overflowY", "auto");

					if ($("body").width() < 1024) {
						$(".dv4").animate(
							{
								top: "0",
							},
							1000
						);
						$("#dView5").animate(
							{
								top: "50%",
							},
							1000
						);
					} else {
						$(".dv4").animate(
							{
								top: "15dvh",
							},
							1000
						);
					}

					$("#dView5").animate(
						{
							opacity: "1",
						},
						1000
					);

					let ab = 10;
					var abc = setInterval(function () {
						document.getElementsByClassName("sub-span")[
							ab
						].style.opacity = "1";
						document.getElementsByClassName("sub-span")[
							ab
						].style.transition = "all 2s";

						if (ab >= 14) {
							clearInterval(abc);
						}
						ab++;
					}, 250);

					document.getElementsByClassName(
						"macbook"
					)[0].style.transform = "scale(1.1)";
					document.getElementsByClassName("macbook")[0].style.filter =
						"blur(3px)";
					document.getElementsByClassName(
						"macbook"
					)[0].style.transition = "all 2s";

					setTimeout(function () {
						document.getElementById(
							"falseContainer"
						).style.display = "none";
					}, 900);
					setTimeout(function () {
						view4Top = $("#view4").position().top;
					}, 1100);
					setTimeout(function () {
						$("#falseContainer").css("overflowY", "auto");
						dView = 4;
					}, 800);
				}
			} else {
				if (dView == 2) {
					$("#falseContainer").css("overflowY", "hidden");
					let ty = 1;
					document.getElementsByClassName("ffgh")[0].style.opacity =
						"1";
					document.getElementsByClassName(
						"ffgh"
					)[0].style.transition = "all 1s";

					document.getElementsByClassName(
						"bigScreenText"
					)[0].style.opacity = "1";
					document.getElementsByClassName(
						"bigScreenText"
					)[1].style.opacity = "1";
					document.getElementsByClassName(
						"bigScreenText"
					)[0].style.transition = "all 1s";
					document.getElementsByClassName(
						"bigScreenText"
					)[1].style.transition = "all 1s";
					var tyx = setInterval(function () {
						document.getElementsByClassName("ffgh")[
							ty
						].style.opacity = "1";
						document.getElementsByClassName("ffgh")[
							ty
						].style.transition = "all 4s";

						ty++;
						if (ty == 5) {
							clearInterval(tyx);
						}
					}, 150);

					setTimeout(function () {
						document.getElementById("caption").style.opacity = "0";
						document.getElementById("caption").style.transition =
							"all 2s";
					}, 1000);
					setTimeout(function () {
						$("#falseContainer").css("overflowY", "auto");
						dView = 1;
					}, 2000);
				}
				if (
					dView == 3 &&
					$("#expandCircle").width() == $("body").width()
				) {
					$("#falseContainer").css("overflowY", "hidden");
					$("#expandCircleTop").animate(
						{
							opacity: "0",
						},
						1000
					);

					$("#expandCircle").animate(
						{
							width: "0px",
							height: "0px",
							top: "50%",
							bottom: "50%",
							borderRadius: "8px",
						},
						1500
					);

					$(".tc a").css("color", "#fff");
					$(".tc a").css("font-weight", "500");
					setTimeout(function () {
						view4Top = $("#view4").position().top;
						$("#falseContainer").css("overflowY", "auto");
						dView = 2;
					}, 2000);
				}
			}
			lastScrollTop = st;
		});

		$(window).scroll(function () {
			if (
				dView == 4 &&
				$("#dv4Checker").css("display") == "block" &&
				$("html, body").scrollTop() <= 0
			) {
				$("#falseContainer").css("overflowY", "hidden");
				$("#dv4Checker").css("display", "none");

				$(".dv4, #dView5").animate(
					{
						top: "85dvh",
					},
					1000
				);
				$("#dView5").animate(
					{
						opacity: "1",
					},
					1000
				);

				let ab = 10;
				var abc = setInterval(function () {
					document.getElementsByClassName("sub-span")[
						ab
					].style.opacity = "0";
					document.getElementsByClassName("sub-span")[
						ab
					].style.transition = "all 2s";

					if (ab >= 14) {
						clearInterval(abc);
					}
					ab++;
				}, 250);

				document.getElementsByClassName("macbook")[0].style.transform =
					"scale(1.5)";
				document.getElementsByClassName("macbook")[0].style.filter =
					"blur(0px)";
				document.getElementsByClassName("macbook")[0].style.transition =
					"all 2s";

				setTimeout(function () {
					document.getElementById("falseContainer").style.display =
						"block";
				}, 900);
				setTimeout(function () {
					view4Top = $("#view4").position().top;
				}, 1100);
				setTimeout(function () {
					$("#falseContainer").css("overflowY", "auto");
					dView = 3;
				}, 800);
			}
		});
	}

	$(".testimony-logo").click(function () {
		$("." + $(this).attr("class").split(" ")[1]).animate(
			{
				opacity: "0",
			},
			500
		);
	});

	$("#bars").click(function () {
		$("#bars").css("display", "none");
		$("#close").css("display", "table-cell");
		$("#falseContainer").css("display", "none");
		$("#navbar").animate(
			{
				width: "100dvw",
				height: "100dvh",
				top: "0",
				bottom: "0",
				borderRadius: "0px",
			},
			1000
		);
		$("#navbarContent, #navbar h5").delay(1000).animate(
			{
				opacity: "1",
			},
			"slow"
		);
	});

	$("#close").click(function () {
		$("#bars").css("display", "table-cell");
		$("#close").css("display", "none");
        $("#falseContainer").css("display", "block");
		$("#navbarContent").css("opacity", "0");
		$("#navbar h5").css("opacity", "0");
		$("#navbar").animate(
			{
				width: "0dvw",
				height: "0dvh",
				top: "50%",
				bottom: "50%",
				borderRadius: "0px",
			},
			1000
		);
	});

	$("#dWhyUsClose").click(function () {
		$(".dWhyUs").fadeOut(600);
		$("#dWhyUsClose").fadeOut(600);
		$("#dWhyUsMenu").delay(650).fadeIn(600);
	});

	$("#dWhyUsMenu td").click(function () {
		const key = ["A_1", "A_2", "A_3", "A_4"];
		const val = ["dQu", "dTe", "dMo", "dSu"];
		$("#dWhyUsMenu").fadeOut(600);
		$("#" + val[key.indexOf($(this).attr("id"))])
			.delay(650)
			.fadeIn(600);
		$("#dWhyUsClose").delay(650).fadeIn(600);
	});

	function getTop(height) {
		var io = (100 - (height / $("body").height()) * 100) / 2;
		return io;
	}
});
