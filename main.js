const accordions = document.querySelectorAll(".contentBx");

for (i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
