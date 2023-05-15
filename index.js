// Show and hide divs

const showOnHover = document.querySelectorAll(".project-img-container");
const hiddenDiv = document.querySelectorAll(".project-preview");

if (window.innerWidth >= 768) {
  showOnHover.forEach((element, index) => {
    element.addEventListener("mouseenter", () => {
      hiddenDiv[index].style.display = "flex";
    });

    element.addEventListener("mouseleave", () => {
      hiddenDiv[index].style.display = "none";
    });
  });
}

// form validation

const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("error-message");

emailInput.addEventListener("input", () => {
  if (emailInput.validity.valid) {
    emailInput.classList.remove("invalid");
    errorMessage.textContent = "";
  } else {
    emailInput.classList.add("invalid");
    errorMessage.textContent = "Sorry, invalid format here";
  }
});

form.addEventListener("submit", (e) => {
  if (!emailInput.checkValidity()) {
    e.preventDefault();
    emailInput.classList.add("invalid");
    errorMessage.textContent = "Sorry, invalid format here";
    emailInput.focus();
  }
});
