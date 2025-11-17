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
  {
    name: "Parakeet Pellets",
    price: 0.01,
    inStock: true,
    img: "https://lafeber.com/wp-content/uploads/2020/09/72630-V1-TF-Pellet-Parakeet-SEP20-WEB.jpg",
    category: "parakeets",
  },
  {
    name: "Multivitamins for Pigeons",
    price: 0.01,
    inStock: true,
    img: "https://lafeber.com/wp-content/uploads/2020/09/72630-V1-TF-Pellet-Parakeet-SEP20-WEB.jpg",
    category: "pigeon",
  },
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
  inject(EverythingBirds);
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

addToCart();
// let total = 0;
// EverythingBirds.forEach((item) => {
//   let stotal = item.price * item.quantity;
//   total = total + stotal;
// });
// console.log(total.price);
function total(EverythingBirds) {
  let total = 0;
  EverythingBirds.forEach((item) => {
    total = total + item.price;
  });
}
return total;

function filterbySpecies(Species) {
  const cards = document.querySelectorAll(".everything-birds-card");
  cards.forEach((card) => {
    const cardCategory = card.getAttribute("data-category");
    if (genre === cardCategory) {
      card.computedStyleMap.display = "none";
    }
  });
}
filterbySpecies("Pigeons");
let prod = {
  name: "Pigeon Feed",
  price: 0.01,
  inStock: true,
  img: "https://m.media-amazon.com/images/I/71WBymL3qDL.jpg",
  category: "pigeon",
};
const cart = [];
function createCartObject(prod) {
  const cartProduct = { ...prod, quantity: 1 };
  return cartProduct;
}
function checkCart(prod) {
  const cartProduct = { ...prod, quantity: 1 };
  const found = cart.find((cartItem) => cartItem.title === prod.title);
  if (found) {
    found.quantity += 1;
  } else {
    cart.push(prod);
  }
}
