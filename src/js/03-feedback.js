import throttle from 'lodash.throttle';


const formEl = document.querySelector('.feedback-form');
const emailEL = document.querySelector('.feedback-form input');
const messageEL = document.querySelector('.feedback-form textarea');


const formData = {};

const takeFormData = function (e) {
    formData[e.target.name] = e.target.value;

    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
    console.log(JSON.stringify(formData))
}
const submitFormData = function(){
    localStorage.clear()
}

const populateFormData = function (e) {
    const savedMessage = localStorage.getItem('feedback-form-state')

    if (savedMessage) {
       emailEL.value = 25
    }
}
formEl.addEventListener('input', takeFormData)
formEl.addEventListener('submit', submitFormData)
//    localStorage.getItem("feedback-form-state", JSON.parse(formData);)