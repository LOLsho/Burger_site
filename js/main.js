// --- Functions --- //
function delay(ms) {
	return new Promise(function(resolve) {
		setTimeout(function() {
			resolve();
		}, ms);
	});
}

// --->> team <<--- //
var allBtns = document.querySelectorAll('.team__acco-item');
var links = document.querySelectorAll('.team__acco-trigger');


for (var i = 0; i < allBtns.length; ++i) {
	allBtns[i].addEventListener('click', function(event) {
		event.preventDefault();
	});
}

for (var i = 0; i < allBtns.length; ++i) {
	allBtns[i].addEventListener('click', function() {
		var activeItem = document.querySelector('.team__acco-item--active');
		if (activeItem != null) {
			activeItem.classList.remove('team__acco-item--active');
		}

		if (activeItem == this) {
			return;
		} else {
			this.classList.add('team__acco-item--active');
		}
	});
}

// --->> burger <<--- //
var compositionBtn = document.querySelector('#composition__button');
var compositionInf = document.querySelector('#composition__info');


compositionBtn.addEventListener('mouseover', function() {
	compositionInf.style.padding = '13px 20px';
	compositionInf.style.height = 'auto';
	compositionInf.style.opacity = '1';
});

compositionBtn.addEventListener('mouseout', function() {
	compositionInf.style.padding = '0px 0px';
	compositionInf.style.height = '0';
	compositionInf.style.opacity = '0';
});

// --->> reviews <<--- //
var overlay = document.querySelector('#overlay');
var overlay__close = overlay.querySelector('.overlay__close');

var reviews__btn1 = document.querySelector('#reviews__btn1');
var reviews__btn2 = document.querySelector('#reviews__btn2');
var reviews__btn3 = document.querySelector('#reviews__btn3');
var reviews__btn4 = document.querySelector('#reviews__btn4');
var reviews__btn5 = document.querySelector('#reviews__btn5');
var reviews__btn6 = document.querySelector('#reviews__btn6');
var reviews__btn7 = document.querySelector('#reviews__btn7');
var reviews__btn8 = document.querySelector('#reviews__btn8');

var reviews__btns = [reviews__btn1,
					reviews__btn2,
					reviews__btn3,
					reviews__btn4,
					reviews__btn5,
					reviews__btn6,
					reviews__btn7,
					reviews__btn8];

for (var i=0; i<reviews__btns.length; ++i) {
	reviews__btns[i].addEventListener('click', function(event) {
		
		event.preventDefault();

		overlay.style.display = 'flex';
		
		delay(1).then(function() {
			overlay.style.opacity = '1';
		});
	});
}

overlay__close.addEventListener('click', function() {
	overlay.style.opacity = '0';
	delay(900).then(function() {
		overlay.style.display = 'none';
	});
});