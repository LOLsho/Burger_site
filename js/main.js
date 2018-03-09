// -------- Functions -------- //
function delay(ms) {
	return new Promise(function(resolve) {
		setTimeout(function() {
			resolve();
		}, ms);
	});
}


// -------->> fixed-menu <<-------- //
const FIXED_1 = $('#FIXED_1'),
	  FIXED_2 = $('#FIXED_2'),
	  FIXED_3 = $('#FIXED_3'),
	  FIXED_4 = $('#FIXED_4'),
	  FIXED_5 = $('#FIXED_5'),
	  FIXED_6 = $('#FIXED_6'),
	  FIXED_7 = $('#FIXED_7'),
	  FIXED_8 = $('#FIXED_8');

FIXED_1.on('click', function(event) {
	event.preventDefault();

	performTransition(0);
});

FIXED_2.on('click', function(event) {
	event.preventDefault();

	performTransition(1);
});

FIXED_3.on('click', function(event) {
	event.preventDefault();

	performTransition(2);
});

FIXED_4.on('click', function(event) {
	event.preventDefault();

	performTransition(3);
});

FIXED_5.on('click', function(event) {
	event.preventDefault();

	performTransition(4);
});

FIXED_6.on('click', function(event) {
	event.preventDefault();

	performTransition(5);
});

FIXED_7.on('click', function(event) {
	event.preventDefault();

	performTransition(6);
});

FIXED_8.on('click', function(event) {
	event.preventDefault();

	performTransition(7);
});


// -------->> hero <<-------- //
var scrollDown = $('.go-down-btn');
var menu_btns = $('.nav__link');

const MENU_ABOUT = $('#MENU_ABOUT'),
	  MENU_BURGERS = $('#MENU_BURGERS'),
	  MENU_TEEM = $('#MENU_TEEM'),
	  MENU_MENU = $('#MENU_MENU'),
	  MENU_REVIEWS = $('#MENU_REVIEWS'),
	  MENU_CONTACTS = $('#MENU_CONTACTS'),
	  MENU_ORDER = $('.header__order-link');

scrollDown.on('click', function(event) {
	event.preventDefault();

	scrollToSection('down');
});

MENU_ABOUT.on('click', function(event) {
	event.preventDefault();

	performTransition(1);
});

MENU_BURGERS.on('click', function(event) {
	event.preventDefault();

	performTransition(2);
});

MENU_TEEM.on('click', function(event) {
	event.preventDefault();

	performTransition(3);
});

MENU_MENU.on('click', function(event) {
	event.preventDefault();

	performTransition(4);
});

MENU_REVIEWS.on('click', function(event) {
	event.preventDefault();

	performTransition(5);
});

MENU_ORDER.on('click', function(event) {
	event.preventDefault();

	performTransition(6);
});

MENU_CONTACTS.on('click', function(event) {
	event.preventDefault();

	performTransition(7);
});
// -------->> hero <<-------- //



// -------->> team <<-------- //
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


// -------->> burger <<-------- //
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


// -------->> reviews <<-------- //
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


// -------->> menu <<-------- //
// document.ready(function() {

// });


// -------->> One page scroll <<-------- //
const sections = $('.section');
const display = $('.maincontent');
let inScroll = false;


const performTransition = sectionEq => {
	const position = `${sectionEq * -100}%`;


	if(inScroll) return; 

	inScroll = true;

	sections.eq(sectionEq).addClass('active')
		.siblings().removeClass('active');

	console.log(position);
	display.css({
		'transform' : `translate(0, ${position})`,
		'-webkit-transform' : `translate(0, ${position})`
	});

	setTimeout(() => {
		inScroll = false;
	}, 300);
	
};

const scrollToSection = direction => {
	const activeSection = sections.filter('.active');
	const nextSection = activeSection.next();
	const prevSection = activeSection.prev();


	if(direction == 'up' && prevSection.length) {
		performTransition(prevSection.index());
	}

	if(direction == 'down' && nextSection.length) {
		performTransition(nextSection.index());
	}
};


$(document).on({
	wheel: event => {
		var deltaY = event.originalEvent.deltaY;
		const direction = deltaY > 0 ? 'down' : 'up'; 

		scrollToSection(direction);
	},
	keydown: event => {
		console.log(event.keyCode);
		switch (event.keyCode) {	
			case 40:
				scrollToSection('down');
				break;
			case 38:
				scrollToSection('up');
				break;
		}
	},
	touchmove: event => event.preventDefault()
});

// $(document).swipe( {
//     //Generic swipe handler for all directions
//     swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
//       // Плагин возращает в каком направлении двигается экран, а функция ждет информации о том, куда скролить сайт
//       const scrollDirection = direction === 'down' ? 'up' : 'down';

//       scrollToSection(scrollDirection);
//     }
// });