import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEL = document.querySelector('.feedback-form label input');
const messageEL = document.querySelector('.feedback-form textarea');

const savedMessage = localStorage.getItem('feedback-form-state')
let formData = { 
    email: "",
    message: ""
};

populateFormData();
console.log(formData)

function takeFormData (e) {
    formData[e.target.name] = e.target.value;

    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
    
}
function submitFormData(e) {
    e.preventDefault();
    console.log(formData)
    formEl.reset()
    localStorage.removeItem("feedback-form-state")
    
}

function populateFormData() {

    if (savedMessage) {
        formData = JSON.parse(savedMessage)

        emailEL.value = formData.email;
        messageEL.value = formData.message;
    } else
    {
        emailEL.value = "";
        messageEL.value = "";
        }
}

formEl.addEventListener('input', throttle(takeFormData, 500))
formEl.addEventListener('submit', submitFormData)


//    localStorage.getItem("feedback-form-state", JSON.parse(formData);)