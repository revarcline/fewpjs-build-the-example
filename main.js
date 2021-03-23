// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

const glyphStates = {
  "♡": "♥",
  "♥": "♡",
};

const colorStates = {
  red: "",
  "": "red",
};

const heartButtons = document.querySelectorAll(".like-glyph");

function toggleLike(event) {
  const like = event.target;
  mimicServerCall("fakeURL")
    .then(function (msg) {
      console.log(msg);
      like.innerText = glyphStates[like.innerText];
      like.style.color = colorStates[like.style.color];
    })
    .catch(function (err) {
      const errorSelector = document.querySelector("#modal");
      errorSelector.className = "";
      errorSelector.innerText = err;
      setTimeout(function () {
        (errorSelector.className = "hidden"), 5000;
      });
    });
}

for (const button of heartButtons) {
  button.addEventListener("click", toggleLike);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
