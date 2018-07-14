$(function() {

	//slick-slider
	$(".slider").slick({
		slidesToShow: 4,
		arrows: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: false,
					dots: true
				}
			},
		]
	});

	$(".partners-slider").slick({
		arrows: false,
		slidesToShow: 1,
		dots: true
	});

	//tabs
	$(".tab-content").not(":first").hide();
	$(".tabs .tab").click(function() {
		$(".tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab-content").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	//sandwich
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("active");
		$(".top-nav ul").slideToggle(300);
		return false;
	});
});
