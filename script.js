console.log("@satyammjha");

let subscribebtn = document.getElementById("subscribebtn");
let emailinput = document.getElementById("emailinput");
let emailresult = document.getElementById("emailresult");

subscribebtn.addEventListener("click", function () {
  if (emailinput.value.includes("@", ".")) {
    emailresult.style.display = "block";
    emailinput.value = "";
    window.setTimeout(function () {
      location.reload();
    }, 1000);
  } else {
    emailresult.innerHTML = "Invalid Email !!";
    emailresult.style.display = "block";
    emailresult.style.color = "red";
    window.setTimeout(function () {
      location.reload();
    }, 1000);
  }
});
emailinput.addEventListener("click", function () {
  emailresult.style.display = "none";
});
