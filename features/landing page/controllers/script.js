document.addEventListener("DOMContentLoaded", function () {
  ///////////////////////////////////////////////////////////
  // Get the progress gradient element
  const progressGradient = document.querySelector(".progress-gradient");

  // Get the progress bar container element
  const progressContainer = document.getElementById("progressContainer");

  const emojiImgs = document.querySelectorAll(".progress-bar-container > img");

  emojiImgs.forEach((img, index) => {
    img.style.transform = "translateY(100%)";
  });
  // Function to start the animation
  function startAnimation() {
    // Reset animation by setting width to 0
    progressGradient.style.width = "0%";
    // Set width to 100% to trigger animation
    setTimeout(() => {
      progressGradient.style.width = "100%";
    }, 10); // Delay to ensure width change takes effect
    emojiImgs.forEach((img, index) => {
      setTimeout(() => {
        img.style.opacity = "1";
        img.style.transform = "none";
      }, 300 * index); // Adjust delay timing (300ms per image)
    });
  }

  // Add click event listener to the progress bar container
  progressContainer.addEventListener("click", function () {
    startAnimation(); // Call the function to start the animation
  });

  //////////////////////////////////////////////////////////////////

  const starsProgressContainer = document.querySelector(".stars-chart-box");
  const starsProgress = document.querySelectorAll(".star-percentage");
  const stars = document.querySelector(".star");

  starsProgress.forEach((star) => {
    star.style.width = "0%";
    stars.classList.add("hidden-after");
  });
  function animateStars() {
    starsProgress.forEach((star) => {
      setTimeout(() => {
        star.style.width = "100%";
        stars.classList.remove("hidden-after");
      }, 100);
    });
  }

  starsProgressContainer.addEventListener("click", function () {
    animateStars();
  });

  ///////////////////////////////////////////////////////////
  const pieImg = document.querySelector("#pie-chart");
  const avatarImages = document.querySelectorAll(
    ".chart-img-container > div > img"
  );

  avatarImages.forEach((img, index) => {
    if (index > 0) {
      img.style.opacity = "0";
      img.style.transform = "translateY(100%)";
    }
  });

  pieImg.addEventListener("click", function () {
    // Show and animate avatar images sequentially
    avatarImages[0].style.opacity = "1";

    // Animate remaining avatar images after a delay
    let delay = 0;
    for (let i = 1; i < avatarImages.length; i++) {
      setTimeout(() => {
        avatarImages[i].style.opacity = "1";
        avatarImages[i].style.transform = "none";
      }, 300 * i); // Adjust delay timing (300ms per image)
    }
  });

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const avatarChartBox = document.querySelector(".avatars-chart-box");
  const avatarProgressBars = document.querySelectorAll(
    ".avatar-bar-percentage"
  );
  console.log(avatarProgressBars);
  avatarProgressBars.forEach((progressBar) => {
    progressBar.style.height = "0%";
    progressBar.classList.add("hidden-after");
  });
  avatarChartBox.addEventListener("click", function () {
    avatarProgressBars.forEach((progressBar) => {
      setTimeout(() => {
        progressBar.style.height = "100%";
        progressBar.classList.remove("hidden-after");
      }, 100);
    });
  });

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////circle animation/////
  const circleChart = document.querySelector(".circle-img-container");
  const circleImg = document.querySelector(".circle-img");
  const circleBoxes = document.querySelectorAll(".circle-img-container .box");
  console.log(circleBoxes);

  circleChart.addEventListener("click", function () {
    if (circleImg.classList.contains("moving-circle-forward")) {
      circleImg.classList.remove("moving-circle-forward");
      circleImg.classList.add("moving-circle-backward");
    } else {
      circleImg.classList.add("moving-circle-forward");
      circleImg.classList.remove("moving-circle-backward");
    }
    circleBoxes.forEach((box, index) => {
      if (box.classList.contains("moving-box-forward")) {
        box.classList.remove("moving-box-forward");
        box.classList.add("moving-box-backward");
      } else {
        box.classList.add("moving-box-forward");
        box.classList.remove("moving-box-backward");
      }
    });
  });
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////contact us animation/////
  const contactUsSection = document.querySelector(".contact-us-section");
  const contactUsEmailContainer = document.querySelector(".email-form-container");
  const contactUsHeader = document.querySelector(".contact-us-section header");
  const mashouraLogo = document.querySelector(".contact-us-logo");

  contactUsSection.addEventListener("click", function () {
    if (contactUsEmailContainer.classList.contains("animate-emailBox-forward")) {
      contactUsEmailContainer.classList.remove("animate-emailBox-forward");
      contactUsEmailContainer.classList.add("animate-emailBox-backward"); 
    }
    else {
      contactUsEmailContainer.classList.add("animate-emailBox-forward");
      contactUsEmailContainer.classList.remove("animate-emailBox-backward");
    }
    if (contactUsHeader.classList.contains("animate-contactHeader-forward")) {
        contactUsHeader.classList.remove("animate-contactHeader-forward");
        contactUsHeader.classList.add("animate-contactHeader-backward"); 
      }
      else {
        contactUsHeader.classList.add("animate-contactHeader-forward");
        contactUsHeader.classList.remove("animate-contactHeader-backward");
      }
        if (mashouraLogo.classList.contains("animate-logo-down")) {
            mashouraLogo.classList.remove("animate-logo-down");
            mashouraLogo.classList.add("animate-logo-up"); 
        }
        else {
            mashouraLogo.classList.add("animate-logo-down");
            mashouraLogo.classList.remove("animate-logo-up");
        }
  });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////slider/////
      const questionBankNextBtn = document.getElementById("bankNextBtn");
      const questionBankPrevBtn = document.getElementById("bankPreviousBtn");
      const questionBankForms = document.querySelectorAll(".QuestionsBank-item");
      const questionBankHeadings = document.querySelectorAll(".questions-bank-header h2");
       
      let currentQuestionBankSlide = 0;
       questionBankForms.forEach((form, index) => {
        form.style.transform = `translateX(${index * 120}%)`;
       });
       
       function slideQuestions(direction) {
        const maxSlideIndex = questionBankForms.length - 1;
      
        if (direction === 'next' && currentQuestionBankSlide < maxSlideIndex) {
         currentQuestionBankSlide++;
        } else if (direction === 'previous' &&currentQuestionBankSlide > 0) {
         currentQuestionBankSlide--;
        } else {
          return;
        }
      
        questionBankForms.forEach((question, index) => {
          question.style.transform = `translateX(${(index -currentQuestionBankSlide) * 120}%)`;
        });
      }

      questionBankNextBtn.addEventListener("click", function () {
        slideQuestions('next');
      });
      questionBankPrevBtn.addEventListener("click", function () {
        slideQuestions('previous');
      });
});
