'use strict';

let inputs = document.querySelectorAll('.class');
let wind = document.querySelector('#window');
let equally = document.querySelector('.res');
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let division = document.querySelector('.div');
let multi = document.querySelector('.multi');
let procent = document.querySelector('.procent');
let dot = document.querySelector('.dot');
let del = document.querySelector('.del');
let reset = document.querySelector('.reset');
let btnAll = document.querySelectorAll('#size');
let body = document.querySelector('body');

for (let el of inputs) {
	el.addEventListener('click', function () {
		wind.value += this.value;
	});
}

for (let el of btnAll) {
	el.addEventListener('click', (e) => wind.classList.add('back-wind'));
}

reset.addEventListener('click', () => (wind.value = ''));

del.addEventListener('click', function () {
	let arr = [...wind.value];
	arr.pop();
	wind.value = arr.join('');
});

dot.addEventListener('click', () => {
	wind.value += '.';
});

plus.addEventListener('click', function () {
	let arr = [];
	arr.push(+wind.value);
	wind.value = '';

	equally.addEventListener('click', () => {
		arr.push(+wind.value);
		wind.value = arr.reduce((acc, el) => acc + el, 0).toFixed(1);
		arr = [];
	});
});

minus.addEventListener('click', () => {
	let arr = [];
	arr.push(+wind.value);
	wind.value = '';

	equally.addEventListener('click', () => {
		arr.push(+wind.value);
		let x = arr[0];
		for (let i = 1; i < arr.length; i++) {
			x -= arr[i];
		}
		wind.value = x.toFixed(1);

		arr = [];
	});
});

division.addEventListener('click', () => {
	let arr = [];
	arr.push(+wind.value);
	wind.value = '';

	equally.addEventListener('click', () => {
		arr.push(+wind.value);
		wind.value = arr.reduce((acc, el) => acc / el).toFixed(1);

		arr = [];
	});
});

multi.addEventListener('click', () => {
	let arr = [];
	arr.push(+wind.value);
	wind.value = '';

	equally.addEventListener('click', () => {
		arr.push(+wind.value);
		wind.value = arr.reduce((acc, el) => acc * el).toFixed(1);

		arr = [];
	});
});

procent.addEventListener('click', () => {
	let arr = [];
	arr.push(+wind.value);
	wind.value = '';

	equally.addEventListener('click', () => {
		arr.push(+wind.value);
		let x = arr[0];

		for (let i = 1; i < arr.length; i++) {
			x = x - (x * arr[i]) / 100;
		}
		wind.value = x.toFixed(1);
		arr = [];
	});
});
