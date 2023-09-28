//using selectors inside the element
// traversing the dom

const accordionContent = document.querySelectorAll(".question");
accordionContent.forEach((item, index) => {
  let questionTitle = item.querySelector(".question-title");
  questionTitle.addEventListener("click", () => {
    item.classList.toggle("open");

    let questionText = item.querySelector(".question-text");
    if (item.classList.contains("open")) {
      questionText.style.height = `100%`;
      questionText.style.padding = "10px 0 20px 0";
      questionText.style.display = "block";

      item
        .querySelector("i")
        .classList.replace("fa-plus-square", "fa-minus-square");
    } else {
      questionText.style.height = "0px";
      item
        .querySelector("i")
        .classList.replace("fa-minus-square", "fa-plus-square");
      questionText.style.display = "none";
    }
    removeOpen(index);
  });
});
function removeOpen(index1) {
  accordionContent.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove("open");
      let des = item2.querySelector(".question-text");
      des.style.display = "none";
      item2
        .querySelector("i")
        .classList.replace("fa-minus-square", "fa-plus-square");
    }
  });
}
