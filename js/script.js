"use strict";

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

const input = document.getElementById("link-input");
const linkForm = document.getElementById("link-form");
const errMsg = document.getElementById("err-msg");

// Toggle Mobile Menu
const navToggle = function () {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
};

// Validate a URL
function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}

const formSubmit = function (e) {
  e.preventDefault();

  if (input.value === "") {
    errMsg.innerHTML = "Please Enter Something!!";
    input.classList.add("border-red");
  } else if (!validURL(input.value)) {
    errMsg.innerHTML = "Please Enter a valid URL!!";
    input.classList.add("border-red");
  } else {
    errMsg.innerHTML = "";
    input.classList.remove("border-red");
    alert("Success!!");
  }
};

btn.addEventListener("click", navToggle);
linkForm.addEventListener("submit", formSubmit);
