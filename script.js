
const form = document.querySelector("form");
const messageBox = document.querySelector(".form-message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    messageBox.style.display = "block";

    if (name === "" || email === "" || message === "") {
        messageBox.textContent = "Please fill in all fields.";
        messageBox.className = "error";
        return;
    }

    messageBox.textContent = "Thank you " + name + "! Your message has been sent.";
    messageBox.className = "success";

    form.reset();
});


