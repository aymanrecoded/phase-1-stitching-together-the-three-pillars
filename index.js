/* This is a file inserted to keep the learn IDE browser happy */
const testVar = {}
const articleHearts = document.querySelectorAll(".like-glyph");
const glyphStates = {
    "♡": "♥",
    "♥": "♡"
};
const colorStates = {
    "red": "",
    "": "red"
};
const serverMessage = "Thank you for the like!";

function likeCallback(e) {
    const heart = e.target;
    mimicServerCall()
        .then(function (serverMessage) {
            alert("You notified the server!");
            heart.innerText = glyphStates[heart.innerText];
            heart.style.color = colorStates[heart.style.color];
        })
        .catch(function (error) {
            alert("Something went wrong!");
        });
}

for (const glyph of articleHearts) {
    glyph.addEventListener("click", likeCallback);
}
