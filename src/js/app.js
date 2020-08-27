'use strict';

const form = document.querySelector('.mailpoet_form');
const inputName = form.querySelector('input[type="text"].mailpoet_text');
const inputEmail = form.querySelector('input[type="email"].mailpoet_text');

inputName.placeholder = 'Ваше имя';
inputEmail.placeholder = 'E-mail';