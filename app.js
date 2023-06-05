document
  .querySelector(".create-account")
  .addEventListener("click", function (event) {
    checkPasswordsMatch2();

  });

function checkPasswordsMatch2() {
  const password1 = document.getElementById("password").value;
  const password2 = document.getElementById("password2").value;

  if (password1 == "" || password1 == undefined || password1 == null) {
    document.getElementById("passwordtest").innerHTML = "Passwords must be filled out";
    document.getElementById("password").style.borderColor = "#981717";
    document.getElementById("password2").style.borderColor = "#981717";
    document.getElementById("password").style.borderRadius = "4px";
    document.getElementById("password2").style.borderRadius = "4px";
    document.getElementById("password").style.transitionProperty = "border";
    document.getElementById("password2").style.transitionProperty = "border";
    document.getElementById("password").style.transitionDuration = ".5s";
    document.getElementById("password2").style.transitionDuration = ".5s";
    return
  }
  if (password1 === password2 ) {
    document.getElementById("passwordtest").innerHTML = "";
    document.getElementById("password").style.borderColor = "#26bcf3";
    document.getElementById("password2").style.borderColor = "#26bcf3";
    document.getElementById("password").style.borderRadius = "4px";
    document.getElementById("password2").style.borderRadius = "4px";
    document.getElementById("password").style.transitionProperty = "border";
    document.getElementById("password2").style.transitionProperty = "border";
    document.getElementById("password").style.transitionDuration = ".5s";
    document.getElementById("password2").style.transitionDuration = ".5s";
  } else {
    document.getElementById("passwordtest").innerHTML = "passwords must match";
    document.getElementById("password").style.borderColor = "#981717";
    document.getElementById("password2").style.borderColor = "#981717";
    document.getElementById("password").style.borderRadius = "4px";
    document.getElementById("password2").style.borderRadius = "4px";
    document.getElementById("password").style.transitionProperty = "border";
    document.getElementById("password2").style.transitionProperty = "border";
    document.getElementById("password").style.transitionDuration = ".5s";
    document.getElementById("password2").style.transitionDuration = ".5s";
    event.preventDefault();
  }
}

document.getElementById("country").addEventListener("change", validateCountry);
document.getElementById("email").addEventListener("blur", validateEmail);
document
  .getElementById("password2")
  .addEventListener("blur", checkPasswordsMatch2);

function validateCountry() {
  let countrySelect = document.getElementById("country");
  let selectedValue = countrySelect.value;

  if (selectedValue !== "000") {
    countrySelect.classList.add("valid");
    return true
  } else {
    countrySelect.classList.remove("valid");
    return false
  }
}

function validateEmail() {
  let emailInput = document.getElementById("email");
  let email = emailInput.value;
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailRegex.test(email)) {
    console.log("Valid email!");
    return true
  } else {
    console.log("Invalid email!");
    return false
  }
}
