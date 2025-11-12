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
