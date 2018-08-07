var data = null;

// const XMLHttpRequest = require('XMLHttpRequest');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://challenge.subsplash.net");
xhr.setRequestHeader("X-Sap-Auth", "Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlN2U5NDhlOC0xMzA3 LTRhNDktOTkzZS1jZDQwMGIyNDBiNzMiLCJpYXQiOjE1MTc0NDMyMDB9.c CnoZDiDA1wZDw2jrbRgpwWvtA5nHHaDaUKLl1fAXAY");
xhr.setRequestHeader("Cache-Control", "no-cache");
xhr.setRequestHeader("Postman-Token", "81f2d384-13e9-4ff3-bbcc-4eb12d0e6390");

xhr.send(data);
