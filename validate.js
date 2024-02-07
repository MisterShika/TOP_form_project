const createAccountForm = document.getElementById("createAccountForm");
const errorInfo = document.getElementById("errorInfo");

const validatePassword = (pass1, pass2) => {
    if(pass1 === pass2){
        return true;
    }else{
        return false;
    }
}

createAccountForm.addEventListener("submit", function(){
    let thePassword = document.getElementById("password");
    let theConfirmPassword = document.getElementById("confirmPassword");
    if(!validatePassword(thePassword.value, theConfirmPassword.value)){
        event.preventDefault();
        thePassword.classList.add("inputError");
        theConfirmPassword.classList.add("inputError");
        errorInfo.innerHTML = "*Passwords do not match.";
    }
});