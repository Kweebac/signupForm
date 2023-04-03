const password = document.querySelector("input[id=password]");
const confirmPassword = document.querySelector("input[id=confirmPassword]");
const submitButton = document.querySelector("button");
const passwordsMatch = document.querySelector(".form span");

function doPasswordsMatch() {
  if (password.value == "" && confirmPassword.value == "") {
    return;
  } else if (password.value == confirmPassword.value) {
    passwordsMatch.textContent = "";
  } else {
    passwordsMatch.textContent = "* Passwords do not match";
  }
}

confirmPassword.addEventListener("input", doPasswordsMatch);
password.addEventListener("input", doPasswordsMatch);
