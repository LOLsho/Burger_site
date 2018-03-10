// $('#form').on('submit', submitForm);

// function submitForm(ev) {
// 	ev.preventDefault();

// 	var form = $(ev.target),
// 		data = form.serialize(),
// 		url = form.attr('action'),
// 		type = form.attr('method');

// 	var request = $.ajax({
// 		type = type,
// 		url = url,
// 		data = data
// 	});

// 	request.done(function(msg) {
// 		alert(msg);
// 	});

// 	request.fail(function(jqXHR, textStatus) {
// 		alert('Request faied: ' + textStatus);
// 	});
// }