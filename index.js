// const DOMSelectors = {
//   button: document.getElementsByClassName("btn"),
//   name: document.querySelector("name"),
//   price: document.querySelectorAll("price"),
//   box: document.getElementsByClassName("child"),
//   alt: document.getElementsByClassName("images"),
// };
const EverythingBirds = [
  {
    name: "Pigeon Feed",
    price: 0.01,
    inStock: true,
    img: "https://m.media-amazon.com/images/I/71WBymL3qDL.jpg",
    category: "pigeon",
  },
  {
    name: "Multivitamins for Pigeons",
    price: 0.01,
    inStock: true,
    img: "https://lafeber.com/wp-content/uploads/2020/09/72630-V1-TF-Pellet-Parakeet-SEP20-WEB.jpg",
    category: "pigeon",
  },
];

function inject(EverythingBirds) {
  const child = document.querySelector(".child");
  child.insertAdjacentHTML("afterbegin"`<div class="child">
        <h2>${EverythingBirds.name}</h2>
        <img
          class="images"
          ${EverythingBirds.img}
        />
        <h3>${EverythingBirds.price}</h3>
        </div>`);
  inject(EverythingBirds[0]);
}
EverythingBirds.forEach((EverythingBirds) => inject(EverythingBirds));
function addToCart() {
  const buttons = document.querySelectorAll("buttons");
  const btnArray = Array.from(buttons);
  console.log(buttons);
  btnArray.forEach(btn);
  (btn) =>
    btn.addEventListener("click", function (event) {
      console.log(event.target.closest("child").getAttribute("name"));
    });
}
products[3];
addToCart();
