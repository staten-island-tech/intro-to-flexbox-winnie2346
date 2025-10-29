const DOMSelectors = {
  button: document.getElementsByClassName("btn"),
  name: document.querySelector("name"),
  price: document.querySelectorAll("price"),
  box: document.getElementsByClassName("child"),
  alt: document.getElementsByClassName("images"),
};
const EverythingBirds = [
  {
    name: "Pigeon Feed",
    price: 0.01,
    inStock: true,
    alt: "pigeon1",
  },
  {
    name: "Multivitamins for Pigeons",
    price: 0.01,
    inStock: true,
    alt: "pigeon2",
  },
];

function inject(EverythingBirds) {
  const child = document.querySelector(".child");
  child.insertAdjacentHTML("afterbegin"`<div class="child">
        <h2>${EverythingBirds.name}</h2>
        <img
          class="images"
          ${EverythingBirds.images}
        />
        <h3>${EverythingBirds.price}</h3>
        </div>`);
}
inject(EverythingBirds[0]);
