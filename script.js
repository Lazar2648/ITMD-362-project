// Run the script only after the HTML is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  /*1) Scroll to Specials from Intro */
  const seeSpecialsBtn = document.getElementById("see-specials-btn");
  const specialsSection = document.getElementById("specials");

  if (seeSpecialsBtn && specialsSection) {
    seeSpecialsBtn.addEventListener("click", function () {
      specialsSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  /* 2) Toggle details for each special card */
  const detailButtons = document.querySelectorAll(".special-details-btn");

  detailButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // The details paragraph is the next sibling after the button
      const detailsParagraph = button.nextElementSibling;
      if (!detailsParagraph) return;

      detailsParagraph.classList.toggle("hidden");

      // Change button text based on whether it's hidden or not
      if (detailsParagraph.classList.contains("hidden")) {
        button.textContent = "View details";
      } else {
        button.textContent = "Hide details";
      }
    });
  });

  /* 3) Filter menu items by category (All / Pizza / Wings) */
  const filterButtons = document.querySelectorAll(".menu-filter-btn");
  const menuItems = document.querySelectorAll(".menu-items li");

  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const filter = btn.getAttribute("data-filter"); // "all", "pizza", or "wings"

      // Visually highlight the active filter button
      filterButtons.forEach(function (b) {
        b.classList.remove("active-filter");
      });
      btn.classList.add("active-filter");

      // Show or hide each menu item based on its data-category
      menuItems.forEach(function (item) {
        const category = item.getAttribute("data-category"); // "pizza" or "wings"

        if (filter === "all" || category === filter) {
          item.style.display = "list-item";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  /* 4) "Order Now" button shows a message */
  const orderBtn = document.getElementById("order-btn");
  const orderMessage = document.getElementById("order-message");

  if (orderBtn && orderMessage) {
    orderBtn.addEventListener("click", function () {
      orderMessage.textContent =
        "Online ordering is coming soon! Please call (123) 456-7890 to place your order.";
    });
  }

  /* 5) Customer Feedback form validation (Name + Email required)*/
  const feedbackForm = document.getElementById("feedbackForm");
  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");
  const pizzaInput = document.getElementById("pizzaInput");
  const messageInput = document.getElementById("messageInput");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const formSuccess = document.getElementById("formSuccess");

  if (
    feedbackForm &&
    nameInput &&
    emailInput &&
    nameError &&
    emailError &&
    formSuccess
  ) {
    feedbackForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Stop real form submission

      let valid = true;

      // Clear previous messages
      nameError.textContent = "";
      emailError.textContent = "";
      formSuccess.textContent = "";

      // Validate name
      if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required.";
        valid = false;
      }

      // Validate email
      if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required.";
        valid = false;
      } else if (!emailInput.value.includes("@")) {
        emailError.textContent = "Please enter a valid email.";
        valid = false;
      }

      // If everything is valid, show success message
      if (valid) {
        formSuccess.textContent =
          "Thank you! Your feedback was received ";

        //clear the form
        feedbackForm.reset();
      }
    });
  }
});