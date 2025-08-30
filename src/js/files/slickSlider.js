// Slider Template ====================================================================================================//
/*
$(document).ready(function () {
	$('.slider').slick({
		arrows: true, // стрелки
		dots: true, // точки
		slidesToShow: 3, // кол-во показ. слайдов
		slidesToScroll: 1, // кол-во прокручиваемых слайдов за раз
		speed: 1000, // скорость (400)
		autoplay: false, // автовоспроизведение (false)
		autoplaySpeed: 1000, // скорость (3000)

		responsive:[
			{
				breakpoint: 768,
				settings: {
					менять свойства при брейкпоинте
				}
			}
		]

	});
});
*/

// Slider main-screen====================================================================================================//

$(document).ready(function () {
	$('.main-screen__box').slick({
		arrows: true, // стрелки
		dots: true, // точки
		slidesToShow: 1, // кол-во показ. слайдов
		slidesToScroll: 1, // кол-во прокручиваемых слайдов за раз
		speed: 500, // скорость (400)
		//autoplay: false, // автовоспроизведение (false)
		//autoplaySpeed: 1000, // скорость (3000)

		responsive: [
			{
				breakpoint: 400,
				settings: {
					arrows: false,
				}
			}
		]

	});
});

// Slider collections====================================================================================================//

$(document).ready(function () {
	$('.slider-content').slick({
		arrows: true, // стрелки
		dots: false, // точки
		slidesToShow: 3, // кол-во показ. слайдов
		slidesToScroll: 1, // кол-во прокручиваемых слайдов за раз
		speed: 500, // скорость (400)
		//spaceBetween: 40,
		//autoplay: true, // автовоспроизведение (false)
		//autoplaySpeed: 500, // скорость (3000)
	});
});

