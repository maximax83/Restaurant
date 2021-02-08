$(function() {
// burger start ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
	$('.burger').click(function() {
		$('.page, .nav, .burger').toggleClass('burger-active');
	});

	$('.nav__item').click(function() {
		$('.page, .nav, .burger').removeClass('burger-active');
	});
// burger end ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// Подсветка навигации start ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
	$(document).scroll(function() {

		$('.nav__item').removeClass('nav__item_pointer');
		var anchors = $('#welcome, #about, #pricing, #beer, #bread, #featured, #reservation, #contact');

		anchors.each(function(){
			var id = $(this).attr('id');

			if ($(this).offset().top - $(window).scrollTop()<=0 && ($(this).offset().top + $(this).outerHeight(true)) - $(window).scrollTop()>0) {
				$('.nav__item[href=' + '"#' + id +'"]').addClass('nav__item_pointer');
			}
		});
	})
// Подсветка навигации end ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// Прайс фильтр start ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
	$('.pricing-demo__filter').click(function(event) {
		$('.pricing-demo__filter').removeClass('active');
		$(this).addClass('active');

		var filterId = $(this).attr('data-filter');
		$('.pricing-demo__card').each(function(){
			if($(this).hasClass(filterId)){
				$(this).show(500);
			}
			else {
				$(this).hide(500);
			}
		});
	});
// Прайс фильтр end ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// Слайдер start ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
	var slider = $('.slider');
	var track = $('.slider__track');
	var slide = $('.slider__slide');
	var slideWidth = slide.width();
	var pager = $('.slider__pager');
	var pagerDot = $('.slider__pager-dot');
	var numberSlides = slide.length;
	var activeSlideIndex = 0;





	function createPager() {
		pagerDot.remove();
		for (var i = 0; i < numberSlides; i++) {
			pager.prepend('<div class="slider__pager-dot"></div>');
		};

		pagerDot = $('.slider__pager-dot');

		pagerDot.click(function() {
			activeSlideIndex = $(this).index();
			setPositionSlides();
			checkPager();
		});
	};
	createPager();





	function checkPager() {
		pagerDot.removeClass('active');
		pagerDot.eq(activeSlideIndex).addClass('active');
	};
	checkPager();





	function setPositionSlides() {
		track.css({
			transform: 'translateX(' + (-(activeSlideIndex * slideWidth)) + 'px)'
		});
	};
	setPositionSlides();





	function autoSlider(){
		if (activeSlideIndex==(numberSlides - 1))
			{activeSlideIndex=-1};
		activeSlideIndex++;
		setPositionSlides();
		checkPager();
	}

	var setAutoSlider = setInterval(autoSlider, 3000);

	slider.mouseenter(function() {
		clearInterval(setAutoSlider);
	});

	slider.mouseleave(function() {
		setAutoSlider = setInterval(autoSlider, 3000);
	});





	$(window).resize(function () {
		slideWidth = slide.width();
	});
// Слайдер end ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// Стили форм при нажатии Tab start ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
	$('.form-input, .form-btn').click(function() {
		$(this).removeClass('key');
	})

	$('.form-input, .form-btn').blur(function() {
		$(this).removeClass('key');
	});

	$('.form-input, .form-btn').focus(function() {
		$(this).addClass('key');
	});
// Стили форм при нажатии Tab end ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||





});