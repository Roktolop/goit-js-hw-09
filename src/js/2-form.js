`use strict`;

const formData = {
    email: "",
    message: ""
}


const LS_Key = "feedback-form-state";

const form = document.querySelector(`.feedback-form`);
const inputEmail = document.querySelector(`input[type="email"]`);
const textarea = document.querySelector(`textarea[name="message"]`);

const savedValues = JSON.parse(localStorage.getItem(LS_Key));

inputEmail.value = savedValues.email;
textarea.value = savedValues.message;

localStorage.setItem(LS_Key, JSON.stringify(formData));

inputEmail.addEventListener("input", onHandleInput);
textarea.addEventListener("input", onHandleInput);



function onHandleInput(event)
{
    const target = event.target;
    const value = event.target.value;

    if (target === inputEmail) {
        formData.email = value;
    } else if (target === textarea) {
        formData.message = value;
    }

    localStorage.setItem(LS_Key, JSON.stringify(formData));
}


