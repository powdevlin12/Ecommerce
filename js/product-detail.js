const imgListProduct = document.getElementsByClassName("product-img-item");
Array.from(imgListProduct).forEach((e) => {
  e.addEventListener("click", () => {
    console.log(e);
    let img = e.querySelector("img").getAttribute("src");
    document.querySelector(".product-img-active>img").setAttribute("src", img);
  });
});
let descContent = document.getElementsByClassName("desc-content")[0];
let btnViewMore = document.getElementsByClassName("view-more")[0];
btnViewMore.addEventListener("click", () => {
  descContent.classList.toggle("active");
  console.log(descContent.classList);
  btnViewMore.innerHTML = descContent.classList.contains("active")
    ? "view less"
    : "view all";
});
