document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".dropdown-item .question");
  const arrows = document.querySelectorAll(".dropdown-item .arrow");

  questions.forEach((question, index) => {
    question.addEventListener("click", () => toggleActive(index));
  });

  arrows.forEach((arrow, index) => {
    arrow.addEventListener("click", () => toggleActive(index));
  });

  function toggleActive(index) {
    const dropdownItem = questions[index].closest(".dropdown-item");
    const hiddenText = dropdownItem.nextElementSibling;
    const arrow = dropdownItem.querySelector(".arrow");

    dropdownItem.classList.toggle("active");
    hiddenText.classList.toggle("active");
    arrow.classList.toggle("active");

    // Adjust the max-height to smooth the transition
    if (hiddenText.classList.contains("active")) {
      hiddenText.style.maxHeight = hiddenText.scrollHeight + "px";
    } else {
      hiddenText.style.maxHeight = "0";
    }
  }

  // Ensure all hidden text sections are collapsed initially
  const hiddenTexts = document.querySelectorAll(".hidden-text");
  hiddenTexts.forEach((hiddenText) => {
    hiddenText.style.maxHeight = "0";
    hiddenText.classList.remove("active"); // Ensure they are not active
  });

  // Ensure all arrows are not rotated initially
  arrows.forEach((arrow) => {
    arrow.classList.remove("active");
  });
});
