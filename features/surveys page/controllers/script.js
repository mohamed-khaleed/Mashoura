document.addEventListener("DOMContentLoaded", function () {
   
  const questionsNextBtn = document.getElementById("questionsNextBtn");
  const questionsPreviousBtn = document.getElementById("questionsPreviousBtn");
  const questions = document.querySelectorAll(".question-slider-item");
  const surveyNextBtn = document.getElementById("surveyNextBtn");
  const surveyPreviousBtn = document.getElementById("surveyPreviousBtn");
  const surveys = document.querySelectorAll(".servey-item");

  console.log(surveys);

  let questionCurrentSlide = 0;
  let surveyCurrentSlide = 0;

  questions.forEach((question, index) => {
    question.style.transform = `translateX(${index * 102}%)`;
  });
 
  surveys.forEach((survey, index) => {
    survey.style.transform = `translateX(${index * 102}%)`;
  });

  function slideQuestions(direction) {
    const maxSlideIndex = questions.length - 1;
  
    if (direction === 'next' && questionCurrentSlide < maxSlideIndex) {
      questionCurrentSlide++;
    } else if (direction === 'previous' && questionCurrentSlide > 0) {
      questionCurrentSlide--;
    } else {
      return;
    }
  
    questions.forEach((question, index) => {
      question.style.transform = `translateX(${(index - questionCurrentSlide) * 102}%)`;
    });
  }

  function slideSurveys(direction) {
    const maxSlideIndex = surveys.length - 3;
  
    if (direction === 'next' && surveyCurrentSlide < maxSlideIndex) {
      surveyCurrentSlide++;
    } else if (direction === 'previous' && surveyCurrentSlide > 0) {
      surveyCurrentSlide--;
    } else {
      return;
    }
  
    surveys.forEach((survey, index) => {
      survey.style.transform = `translateX(${(index - surveyCurrentSlide) * 102}%)`;
    });
  
  }
  
  surveyNextBtn.addEventListener("click", function () {
    slideSurveys('next');
  
  })
  surveyPreviousBtn.addEventListener("click", function () {
    slideSurveys('previous');
  })
  questionsNextBtn.addEventListener("click", function () {
    slideQuestions('next');
  });
  questionsPreviousBtn.addEventListener("click", function () {
    slideQuestions('previous');
  });
})