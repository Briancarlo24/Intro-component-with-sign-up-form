const button = document.querySelector(".button");
const inputArr = [];
/*ICONS*/
const errorIcon = document.querySelectorAll(".icon");
const errorMEssage = document.querySelectorAll(".error-message");
/*Inputs*/
const inputValue = document.querySelectorAll(".inputs");

/****************CODES*******************/
init();

// INITIALIZE
function init() {
  errorIcon.forEach((item) => {
    item.classList.add("hidden");
  });

  errorMEssage.forEach((item) => {
    item.classList.add("hidden");
  });

  inputValue.forEach((item) => {
    item.classList.remove("errorborder");
  });

  document.getElementById("email").setAttribute("placeholder", "Email");
  document.getElementById("email").style.color = "rgba(0, 0, 0, 0.75)";
}

// IF ANY INPUT IS CLICKED, THE ICON WILL DISAPPEAR
inputValue.forEach((item) => {
  item.addEventListener("click", () => {
    init();
  });
});

// WHEN BUTTON IS CLICKED THIS HAPPENS
button.addEventListener("click", function () {
  inputArr.push(document.forms["Form"].firstname.value);
  inputArr.push(document.forms["Form"].lastname.value);
  inputArr.push(document.forms["Form"].email.value);
  inputArr.push(document.forms["Form"].password.value);
  console.log(inputArr);

  if (
    inputArr[0] !== "" &&
    inputArr[1] !== "" &&
    inputArr[2] !== "" &&
    inputArr[3] !== ""
  ) {
    alert(
      `First Name: ${inputArr[0]} \nLast Name: ${inputArr[1]} \nEmail: ${inputArr[2]} \nPassword: ${inputArr[3]}`
    );

    inputValue.forEach((items) => {
      items.value = "";
    });
    window.location.reload();
  } else {
    for (let i = 0; i < inputArr.length; i++) {
      if (inputArr[i] === "") {
        if (i !== 2) {
          errorIcon[i].classList.remove("hidden");
          errorMEssage[i].classList.remove("hidden");
          inputValue[i].classList.add("errorborder");
        } else {
          errorIcon[i].classList.remove("hidden");
          errorMEssage[i].classList.remove("hidden");
          inputValue[i].classList.add("errorborder");
          document
            .getElementById("email")
            .setAttribute("placeholder", "email@example.com");
          document.getElementById("email").style.color = "hsl(0, 100%, 74%)";
        }
      }
    }
  }
  inputArr.length = 0;
});
