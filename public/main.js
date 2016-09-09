'use strict';
/**
* @see http://artsiom.mezin.eu/technofront/
*/


function onSubmit (form) {

	var data = {
		user: form.elements['user'].value,
		email: form.elements['email'].value
	};

	var result = request('/users', data);

	if( result != undefined ) {
		form.hidden = true;
		window.helloWorld.innerHTML = helloUser(data.user, result);
	}

	console.log(data, result);
}

function plural (num) {

	if( num >= 2 && num <= 4 ) {
		return "раза";
	}else {
		return "раз";
	}
}

function helloUser (text, count) {
	return 'Привет, ' + text + ', вы заходили ' + count + ' раз.';
}

function hello (text) {
	return 'Привет, ' + text;
}



if (typeof exports === 'object') {
	exports.hello = hello;
	exports.plural = plural;
}
