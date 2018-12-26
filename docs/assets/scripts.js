/* Листалка */
var bullets = document.querySelector('.bullets');
var bulletItem = document.querySelectorAll('.bullets__bullet');

bullets.onclick = (e) => {
	console.log(target);
	if (target.classList.contains('bullets__bullet')) {
		for (var i = 0; i < bulletItem.length; i++) {
			if (bulletItem[i].classList.contains('active')) {
				bulletItem[i].classList.remove('active');
			}
			if (target === bulletItem[i]) {
				bulletItem[i].classList.add('active');
			}
		}
	}
};



/* /Листалка */
