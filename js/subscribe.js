/* subscribe */

const form = document.querySelector("#subscribeForm");
const changeMessage = document.querySelector(".message");
const email = document.querySelector(".email");
const submitBtn = document.querySelector("#submitBtn");

const mobileForm = document.querySelector("#mobileForm");
const mobileChangeMessage = document.querySelector(".mobile-message");
const mobileEmail = document.querySelector(".mobile-email");
const mobileSubmitBtn = document.querySelector("#mobileSubmit");
const screenWidths = window.innerWidth;

function sendCheck (message) {

  if (message == "OK") {
    message = "You have successfully subscribed!";
    changeMessage.innerHTML = message;
    changeMessage.style.color = "rgb(0, 218, 0)";
    email.style.pointerEvents = "none";
    submitBtn.style.opacity = "0.5";
    submitBtn.disabled = true;
    mobileEmail.style.pointerEvents = "none";
    mobileSubmitBtn.style.opacity = "0.5";
    mobileSubmitBtn.disabled = true;
  }
  else {
    message = "Something went wrong, please check your email and try again.";
    changeMessage.innerHTML = message;
    changeMessage.style.color = "red";
  }
}

function sendEmail(e) {
  e.preventDefault();
  
  Email.send({
    SecureToken : "0ba5fda0-05a9-4085-ad4c-e508ba8efb00",
    To : email.value,
    From : "arielneville21@hotmail.com",
    Subject : "Welcome! You have successfully subscribed to ariel's blog!",
    Body : "Now you can catch up with the warm posts that I shared, enjoy!"
  }).then(
    message => sendCheck(message)
  );
  
  email.value = '';
}

form.addEventListener('submit', sendEmail);

if (screenWidths <= 768) {
  function sendCheckMobile (message) {

    if (message == "OK") {
      message = "You have successfully subscribed!";
      mobileChangeMessage.innerHTML = message;
      mobileChangeMessage.style.color = "rgb(0, 218, 0)";
      mobileEmail.style.pointerEvents = "none";
      mobileSubmitBtn.style.opacity = "0.5";
      mobileSubmitBtn.disabled = true;
      email.style.pointerEvents = "none";
      submitBtn.style.opacity = "0.5";
      submitBtn.disabled = true;
    }
    else {
      message = "Something went wrong, please check your email and try again.";
      mobileChangeMessage.innerHTML = message;
      mobileChangeMessage.style.color = "red";
    }
  }

  function sendEmailMobile(e) {
    e.preventDefault();
    const mobileEmail = document.querySelector(".mobile-email");
        
    Email.send({
      SecureToken : "0ba5fda0-05a9-4085-ad4c-e508ba8efb00",
      To : mobileEmail.value,
      From : "arielneville21@hotmail.com",
      Subject : "Welcome! You have successfully subscribed to ariel's blog!",
      Body : "Now you can catch up with the warm posts that I shared, enjoy!"
    }).then(
      message => sendCheckMobile(message)
    );

    mobileEmail.value = '';
  }

  mobileForm.addEventListener('submit', sendEmailMobile);
}