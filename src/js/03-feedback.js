import throttle from 'lodash.throttle';


const formEl = document.querySelector('.feedback-form');
const emailEL = document.querySelector('.feedback-form label input');
const messageEL = document.querySelector('.feedback-form textarea');

const savedMessage = localStorage.getItem('feedback-form-state')
const formData = JSON.parse(savedMessage);

populateFormData();
console.log(formData)

function takeFormData (e) {
    formData[e.target.name] = e.target.value;

    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
    console.log(formData)
}
function submitFormData(){
    localStorage.clear()
}

function populateFormData() {
    if (savedMessage) {
        emailEL.value = formData.email || "";
        messageEL.value = formData.message || "";
    } 
}

formEl.addEventListener('input', throttle(takeFormData, 500))
formEl.addEventListener('submit', submitFormData)


//    localStorage.getItem("feedback-form-state", JSON.parse(formData);)