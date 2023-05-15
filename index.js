const showOnHover = document.querySelectorAll(".project-img-container");
const hiddenDiv = document.querySelectorAll(".project-preview");

if (window.innerWidth >= 768) {
  showOnHover.forEach((element, index) => {
    element.addEventListener("mouseenter", () => {
      hiddenDiv[index].style.display = "flex";
    });

    element.addEventListener("mouseleave", () => {
      hiddenDiv[index].style.display = "none";
    });
  });
}
