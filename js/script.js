// Step 4: Find the button by id, listen for click, and toggle the "dark" class on body
const darkBtn = document.getElementById("dark-btn");

darkBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});

// Step 5 (Extra): Say hello with the name the visitor types
const nameInput = document.getElementById("name");
const helloLine = document.getElementById("hello-line");

nameInput.addEventListener("input", function () {
    const visitorName = nameInput.value.trim();
    if (visitorName !== "") {
        helloLine.textContent = "Hello, " + visitorName + "!";
    } else {
        helloLine.textContent = "Hello visitor! Type your name below.";
    }
});

// Step 5 (Extra): Keep the form on the page and reject an empty email
const contactForm = document.getElementById("contact-form");
const emailInput = document.getElementById("email");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const emailValue = emailInput.value.trim();
    const nameValue = nameInput.value.trim();

    if (emailValue === "") {
        formMessage.textContent = "Please enter your email address before submitting.";
        formMessage.className = "form-message error";
        return;
    }

    formMessage.textContent = "Thank you" + (nameValue ? ", " + nameValue : "") + "! Your message has been received.";
    formMessage.className = "form-message success";
});
