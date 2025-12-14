// Basic contact form behavior (demo only)
var contactForm = document.getElementById("contactForm");
var statusText = document.getElementById("status");
var clearButton = document.getElementById("clearBtn");

if (contactForm && statusText) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");

    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var message = messageInput.value.trim();

    if (!name || !email || !message) {
      statusText.textContent = "Please fill out all fields.";
      return;
    }

    statusText.textContent =
      "Thanks! Your message was recorded.";
    contactForm.reset();
  });
}

if (clearButton && contactForm && statusText) {
  clearButton.addEventListener("click", function () {
    contactForm.reset();
    statusText.textContent = "";
  });
}
