'use strict';

const formData = {
    email: savedValues.email,
    message: savedValues.message 
};

const LS_Key = "feedback-form-state";
const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input[type="email"]');
const textarea = document.querySelector('textarea[name="message"]');

const savedValues = JSON.parse(localStorage.getItem(LS_Key)) || { email: "", message: "" };

inputEmail.value = savedValues.email || "";
textarea.value = savedValues.message || "";

function onEmailInput(event) {
    formData.email = event.target.value;
    saveFormData();
}

function onMessageInput(event) {
    formData.message = event.target.value;
    saveFormData();
}

function saveFormData() {
    localStorage.setItem(LS_Key, JSON.stringify(formData));
}

function onFormSubmit(event) {
    event.preventDefault();

    if (!formData.email.trim() || !formData.message.trim()) {
        alert("sign all forms");
        return;
    }

    localStorage.removeItem(LS_Key);
    form.reset();
    formData.email = "";
    formData.message = "";
}

inputEmail.addEventListener("input", onEmailInput);
textarea.addEventListener("input", onMessageInput);
form.addEventListener("submit", onFormSubmit);
