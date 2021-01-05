var submitButton = document.querySelector("button[type='submit']");
var closeButton = document.querySelector("#close");
var afterSubmit = document.querySelector("#after-submit");
submitButton.onclick = (e) => {
    e.preventDefault();
    afterSubmit.style.display = "flex";
    afterSubmit.style.left = "0";
}
closeButton.onclick = (e) => {
    afterSubmit.style.display = "none";
    afterSubmit.style.left = "-100000%";
}