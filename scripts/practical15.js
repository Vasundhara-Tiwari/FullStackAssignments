var form, username, email, password, confirmPassword;
form = document.getElementById("form");
username = document.getElementById("username");
email = document.getElementById("email");
password = document.getElementById("password");
confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});

const isEmail = (emailVal) => {
  var atSymob = emailVal.indexOf("@");
  if (atSymob < 1) return false;
  var dot = emailVal.lastIndexOf(".");
  if (dot <= atSymob + 3) return false;
  if (dot == email.length - 1) return false;
  return true;
};

const validate = () => {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmpasswordValue = confirmPassword.value.trim();

  if (usernameVal === "") {
    setErrorMsg(username, "Username can't be empty");
  } else if (usernameVal.length <= 2) {
    setErrorMsg(username, "Username min 3 char");
  } else {
    setSuccessMsg(username);
  }

  if (emailVal === "") {
    setErrorMsg(email, "Invalid Email");
  } else if (emailVal.length <= 3) {
    setErrorMsg(email, "Invalid Email");
  } else if (!isEmail(emailVal)) {
    setErrorMsg(email, "Invalid Email");
  } else {
    setSuccessMsg(email);
  }

  if (passwordValue === "") {
    setErrorMsg(password, "Password can't be blank");
  } else if (passwordValue.length < 8) {
    setErrorMsg(password, "Password should be minimum 8 characters long");
  } else {
    setSuccessMsg(password);
  }

  if (passwordValue != confirmpasswordValue) {
    setErrorMsg(confirmPassword, "Password does not match");
  } else if (confirmpasswordValue === "") {
    setErrorMsg(confirmPassword, "This field can't be empty");
  } else {
    setSuccessMsg(confirmPassword);
  }
  successMsg();
};

function setErrorMsg(input, errormsgs) {
  const formstyle = input.parentElement;
  const h5 = formstyle.querySelector("h5");
  formstyle.className = "formstyle error";
  h5.innerText = errormsgs;
}

function setSuccessMsg(input) {
  const formstyle = input.parentElement;
  formstyle.className = "formstyle success";
}
