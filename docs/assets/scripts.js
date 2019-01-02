/* Листалка */
var bullets = document.querySelector('.bullets');
var bulletItem = document.querySelectorAll('.bullets__bullet');
var pagesItem = document.querySelectorAll('.pages__item');
var pages = document.querySelector('.pages');


var turnToDefinedPage = (q) => {
	for (var i = 0; i < bulletItem.length; i++) {
		// удаляем active у всех буллетов
		bulletItem[i].classList.remove('active');

		// добавляем style_hidden нужным
		if ((i < q) && (!pagesItem[i].classList.contains('style_hidden'))) {
			pagesItem[i].classList.add('style_hidden');
		} else if ((i >= q) && (pagesItem[i].classList.contains('style_hidden'))) {
			pagesItem[i].classList.remove('style_hidden');
		}
	}
	// добавляем active нужному
	bulletItem[q].classList.add('active');
}

var turnThePage = (e) => {
	// определяем элемент, на котором совершено событие
	var target = e.target;
	for (var q = 0; q < bulletItem.length; q++) {
		if (bulletItem[q] == target) {

			turnToDefinedPage(q);

		}
	}
};

bullets.onclick = function(e) {
	turnThePage(e);
};

window.addEventListener('wheel', function(e) {

	if (!pages.classList.contains('in-progress')) {
		pages.classList.add('in-progress');
		// определяем номер активной страницы
		for (var q = 0; q < bulletItem.length; q++) {
			if (bulletItem[q].classList.contains('active')) break;
		}
		if (e.deltaY < 0) {
			q++;
			if (q >= bulletItem.length - 1) q = bulletItem.length - 1;
			turnToDefinedPage(q);
			console.log('up', q, e.deltaY);
		} else if (e.deltaY > 0) {
			q--;
			if (q < 0) q = 0;
			turnToDefinedPage(q);
			console.log('down', q, e.deltaY);
		}
		setTimeout(function(){pages.classList.remove('in-progress')}, 200)
	}
	
});

/* /Листалка */
