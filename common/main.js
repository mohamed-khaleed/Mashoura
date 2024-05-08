document.addEventListener("DOMContentLoaded", function () {
 
     ////contact us animation/////
  const contactUsSection = document.querySelector(".contact-us-section");
  const contactUsEmailContainer = document.querySelector(
    ".email-form-container"
  );
  const contactUsHeader = document.querySelector(".contact-us-section header");
  const mashouraLogo = document.querySelector(".contact-us-logo");

  contactUsSection.addEventListener("click", function () {
    console.log("clicked")
    if (
      contactUsEmailContainer.classList.contains("animate-emailBox-forward")
    ) {
      contactUsEmailContainer.classList.remove("animate-emailBox-forward");
      contactUsEmailContainer.classList.add("animate-emailBox-backward");
    } else {
      contactUsEmailContainer.classList.add("animate-emailBox-forward");
      contactUsEmailContainer.classList.remove("animate-emailBox-backward");
    }
    if (contactUsHeader.classList.contains("animate-contactHeader-forward")) {
      contactUsHeader.classList.remove("animate-contactHeader-forward");
      contactUsHeader.classList.add("animate-contactHeader-backward");
    } else {
      contactUsHeader.classList.add("animate-contactHeader-forward");
      contactUsHeader.classList.remove("animate-contactHeader-backward");
    }
    if (mashouraLogo.classList.contains("animate-logo-down")) {
      mashouraLogo.classList.remove("animate-logo-down");
      mashouraLogo.classList.add("animate-logo-up");
    } else {
      mashouraLogo.classList.add("animate-logo-down");
      mashouraLogo.classList.remove("animate-logo-up");
    }
  });
  //////////mobile nav//////

  const btnNavEl = document.querySelector(".btn-mobile-nav");
  const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
});
