// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// Функционал слайдера-слик (MW 3.2)
//$(document).ready(function () {
//	$('.comment__body').slick();
//})

// marks car =================//

let carList = document.querySelector('.marks-select')

carList.addEventListener('click', function (e) {

	let checkItem = e.target.closest('.marks-select__item');
	if (checkItem) {
		checkItem.classList.toggle('_cheched')
	}
})




// noUiSlider ====================================================================================================//

var snapSlider = document.getElementById('range__snap');

noUiSlider.create(snapSlider, {
	start: [0, 1100],
	snap: true,
	//tooltips: true,
	connect: true,
	range: {
		'min': 0,
		'10%': 500,
		'20%': 800,
		'30%': 1100,
		'40%': 1400,
		'50%': 1700,
		'60%': 2000,
		'70%': 2300,
		'80%': 2700,
		'90%': 3000,
		'max': 3500
	},
	pips: {
		mode: 'range',
		density: 10
	}
});

let marginMin = document.querySelector('.marginMin')
let marginMax = document.querySelector('.marginMax')

snapSlider.noUiSlider.on('update', (values, handle) => {
	if (handle) {
		marginMax.innerHTML = +values[handle];
	} else {
		marginMin.innerHTML = +values[handle];
	}
})

//  ====================================================================================================//
