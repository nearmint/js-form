const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");
const country = document.getElementById("country");
const countryError = document.querySelector("#country + span.error");
const zip = document.getElementById("zip");
const zipError = document.querySelector("#zip + span.error");

const pass = document.getElementById("pass");
const passError = document.querySelector("#pass + span.error");

let passContent;

const passConfirm = document.getElementById("passConfirm");
const passConfirmError = document.querySelector("#passConfirm + span.error");

const form  = document.getElementsByTagName('form')[0];

email.addEventListener('blur', (event) => {

    if(email.value === "") {
        email.setCustomValidity("Please enter a value!");
        emailError.textContent = "You need to enter value.";
    }

email.addEventListener("input", function(event) {

 
    if(email.validity.patternMismatch) {
        email.setCustomValidity("I am expecting an e-mail address!");
        emailError.textContent = "You need to enter an e-mail address.";
    }
    else {
        email.setCustomValidity("");
        emailError.textContent = "";
    }


});

});

country.addEventListener('blur', (event) => {

    if(country.value === "") {
        country.setCustomValidity("Please enter a value!");
        countryError.textContent = "You need to enter value.";
    }

country.addEventListener("input", function() {

    if(country.validity.patternMismatch) {
        country.setCustomValidity("Please enter a country with at least three letters!");
        countryError.textContent = "The country name needs to have at least three letters."
    }

    else {
        country.setCustomValidity("");
        countryError.textContent = "";
    }


})

});

zip.addEventListener('blur', (event) => {

    if(zip.value === "") {
        zip.setCustomValidity("Please enter a value!");
        zipError.textContent = "You need to enter value.";
    }

zip.addEventListener("input", function() {
    if(zip.validity.patternMismatch) {
        zip.setCustomValidity("Please enter a Zip Code with 5 digits!");
        zipError.textContent = "The Zip Code needs to have 5 digits."
    }

    else {
        zip.setCustomValidity("");
        zipError.textContent = "";
    }
})

});

pass.addEventListener('blur', (event) => {

    if(pass.value === "") {
        pass.setCustomValidity("Please enter a value!");
        passError.textContent = "You need to enter value.";
    }


pass.addEventListener("input", function() {
    if(pass.validity.patternMismatch) {
        pass.setCustomValidity("Please enter a password with minimum eight characters, at least one uppercase letter, one lowercase letter and one number.");
        passError.textContent = "Please enter a minimum of eight characters, at least one uppercase letter, one lowercase letter and one number."
    }

    else {
        pass.setCustomValidity("");
        passError.textContent = "";
    }

    passContent = pass.textContent;

})
});


passConfirm.addEventListener('blur', (event) => {

    if(passConfirm.value === "") {
        passConfirm.setCustomValidity("Please enter a value!");
        passConfirmError.textContent = "You need to enter value.";
    }

passConfirm.addEventListener("input", function() {

    if(passConfirm.value !== pass.value) {
        passConfirm.setCustomValidity("Your passwords need to match.")
        passConfirmError.textContent = "Your passwords need to match."
    }

    else {

        passConfirm.setCustomValidity("");
        passConfirmError.textContent = "";

    }

})
});

form.addEventListener('submit', function (event) {
    event.preventDefault();
    form.style.display = "none";
    document.getElementById("thumbsup").style.display = "block";

});

