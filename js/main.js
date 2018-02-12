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