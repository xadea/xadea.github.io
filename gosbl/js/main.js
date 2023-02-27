document.querySelector(".form__auth-btn").onclick = function () {
  const userPassFirst = document.querySelector("#password1").value;
  const userPassSecond = document.querySelector("#password2").value;

  if (userPassFirst == "") {
    document.getElementById("password1").style = "border: 1px solid red";
    document.getElementById("password2").style = "border: 1px solid red";
  } else if (userPassFirst != userPassSecond) {
    document.getElementById("password1").style = "border: 1px solid red";
    document.getElementById("password2").style = "border: 1px solid red";
    return false;
  } else if (userPassFirst == userPassSecond) {
    document.getElementById("password1").style = "border: 1px solid green";
    document.getElementById("password2").style = "border: 1px solid green";
  }
  return true;
};

let menuBtnEl = document.querySelector(".menu-btn");
let menuEl = document.querySelector(".menu");
let bodyEl = document.body;
menuBtnEl.addEventListener("click", function () {
  menuBtnEl.classList.toggle("active");
  menuEl.classList.toggle("active");
  bodyEl.classList.toggle("hide__scroll");
});
