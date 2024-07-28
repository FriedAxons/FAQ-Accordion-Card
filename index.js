document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".dropdown-item .question");
    const arrows = document.querySelectorAll(".dropdown-item .arrow");
    const dropdownItems = document.querySelectorAll(".dropdown-item");
    const hiddenTexts = document.querySelectorAll(".hidden-text");

    questions.forEach((question, index) => {
      question.addEventListener("click", () => toggleActive(index));
    });

    arrows.forEach((arrow, index) => {
      arrow.addEventListener("click", () => toggleActive(index));
    });

    function toggleActive(index) {
      const selectedItem = dropdownItems[index];
      const hiddenText = selectedItem.nextElementSibling;
      const question = selectedItem.querySelector(".question");
      const arrow = selectedItem.querySelector(".arrow");

      // Close all items except the selected one
      dropdownItems.forEach((item, i) => {
        if (i !== index) {
          item.classList.remove("active");
          hiddenTexts[i].classList.remove("active");
          hiddenTexts[i].style.maxHeight = "0";
        }
      });

      // Toggle the selected item
      selectedItem.classList.toggle("active");
      hiddenText.classList.toggle("active");
      arrow.classList.toggle("active");

      // Adjust the max-height to smooth the transition
      if (hiddenText.classList.contains("active")) {
        hiddenText.style.maxHeight = hiddenText.scrollHeight + "px";
      } else {
        hiddenText.style.maxHeight = "0";
      }

      if (question.classList.contains("active")) {
        question.style.color = "hsl(238, 29%, 16%)";
      } else {
        question.style.color = "hsl(237, 12%, 33%)";
      }
    }

    // Ensure all hidden text sections are collapsed initially
    hiddenTexts.forEach((hiddenText) => {
      hiddenText.style.maxHeight = "0";
      hiddenText.classList.remove("active");
    });

    // Ensure all arrows are not rotated initially
    arrows.forEach((arrow) => {
      arrow.classList.remove("active");
    });
});
