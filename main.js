const toggle = document.querySelector(".question");
const answer = document.querySelector(".faq__answer");

toggle.addEventListener("click", function () {
  if (answer.classList.contains("faq__active")) {
    answer.classList.remove("faq__active");
  } else {
    answer.classList.add("faq__active");
  }
});
