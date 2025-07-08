'use strict';

const LS_Key = "feedback-form-state";
const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input[type="email"]');
const textarea = document.querySelector('textarea[name="message"]');

const savedValues = JSON.parse(localStorage.getItem(LS_Key)) || { email: "", message: "" };

const formData = {
    email: savedValues.email,
    message: savedValues.message 
};

inputEmail.value = savedValues.email || "";
textarea.value = savedValues.message || "";

function handleFormInput(event) {
    const target = event.target;
    if (target.name === "email") {
        formData.email = target.value;
    } else if (target.name === "message") {
        formData.message = target.value;
    }
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

    console.log(formData);

    localStorage.removeItem(LS_Key);
    form.reset();
    formData.email = "";
    formData.message = "";
}

form.addEventListener("input", handleFormInput);
form.addEventListener("submit", onFormSubmit);
