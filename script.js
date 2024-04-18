
const Name =document.getElementById('name');
const email=document.getElementById('email');
const message =document.getElementById('message');
const form =document.getElementById('form');

const name_error =document.getElementById('name_error');
const email_error =document.getElementById('email_error');

form.addEventListener('submit',(e)=>{
    var emailcheck = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if(Name.value === ""  || Name.value == null){
        e.preventDefault();
        name_error.innerHTML = "Name is required";
    }else{
        name_error.innerHTML ="";
    }

    if(!email.value.match(emailcheck)){
        e.preventDefault();
        email_error.innerHTML = "Valid e-mail is required";

    }else{
        email_error.innerHTML = "";

    }
});