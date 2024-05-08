document.addEventListener("DOMContentLoaded", function () {
  ///////////////////////////////////////////////////////////
  
  const progressGradient = document.querySelector(".progress-gradient");
  const progressContainer = document.getElementById("progressContainer");
  const emojiImgs = document.querySelectorAll(".progress-bar-container > img");

  emojiImgs.forEach((img, index) => {
    img.style.transform = "translateY(100%)";
  });
  function startAnimation() {
    progressGradient.style.width = "0%";
    setTimeout(() => {
      progressGradient.style.width = "100%";
    }, 10); 
    emojiImgs.forEach((img, index) => {
      setTimeout(() => {
        img.style.opacity = "1";
        img.style.transform = "none";
      }, 300 * index); 
    });
  }

  progressContainer.addEventListener("click", function () {
    startAnimation(); 
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
    avatarImages[0].style.opacity = "1";
    let delay = 0;
    for (let i = 1; i < avatarImages.length; i++) {
      setTimeout(() => {
        avatarImages[i].style.opacity = "1";
        avatarImages[i].style.transform = "none";
      }, 300 * i); 
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


  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////slider/////
  const questionBankNextBtn = document.getElementById("bankNextBtn");
  const questionBankPrevBtn = document.getElementById("bankPreviousBtn");
  const questionBankForms = document.querySelectorAll(".QuestionsBank-item");
  const questionBankHeadings = document.querySelectorAll(
    ".slider-headers h2"
  );
  const slides = document.querySelectorAll(".QuestionsBank-item");

  
  questionBankForms.forEach((form, index) => {
    form.style.transform = `translateX(${index * 120}%)`;
  });
  questionBankHeadings.forEach((heading, index) => {
    heading.style.transform = `translateX(${index * -160}%)`;
  });

  let currentSlide = 0;
  let currentQuestionBankHeadingSlide = 0;
  
  function showSlideHeading(n) {
   
    n = (n + questionBankHeadings.length) % questionBankHeadings.length;

    questionBankHeadings.forEach(slide => {
        slide.style.transform = 'translateX(-160%)'; 
    });
 
    
    questionBankHeadings[n].style.transform = 'translateX(0)';
    currentQuestionBankHeadingSlide = n;
   }

  function showSlide(n) {
   n = (n + slides.length) % slides.length;
   slides.forEach(slide => {
       slide.style.transform = 'translateX(120%)'; 
   });

   slides[n].style.transform = 'translateX(0)';
   currentSlide = n;
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
    showSlideHeading(currentQuestionBankHeadingSlide - 1);
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
    showSlideHeading(currentQuestionBankHeadingSlide + 1);
  }

  showSlide(currentSlide);
  showSlideHeading(currentQuestionBankHeadingSlide);
  questionBankNextBtn.addEventListener("click", function () {
    nextSlide();
  });
  questionBankPrevBtn.addEventListener("click", function () {
    prevSlide();
  });


});
