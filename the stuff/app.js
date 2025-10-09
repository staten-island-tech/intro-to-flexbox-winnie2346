const birdfood = [
  {
    name: "yummy",
    price: 0.01,
    inStock: true,
    brand: "Premium Bird Feed",
    img: "images/uh",
    alt: "bird food",
  },
  {
    name: "yummy",
    price: 0.01,
    inStock: true,
    brand: "Premium Bird Feed",
    img: "images/uh",
    alt: "bird food",
  },
  {
    name: "yummy",
    price: 0.01,
    inStock: true,
    brand: "Premium Bird Feed",
    img: "images/uh",
    alt: "bird food",
  },
  {
    name: "yummy",
    price: 0.01,
    inStock: true,
    brand: "Premium Bird Feed",
    img: "images/uh",
    alt: "bird food",
  },
  {
    name: "yummy",
    price: 0.01,
    inStock: true,
    brand: "Premium Bird Feed",
    img: "images/uh",
    alt: "bird food",
  },
  {
    name: "yummy",
    price: 0.01,
    inStock: true,
    brand: "Premium Bird Feed",
    img: "images/uh",
    alt: "bird food",
  },
  {
    name: "yummy",
    price: 0.01,
    inStock: true,
    brand: "Premium Bird Feed",
    img: "images/uh",
    alt: "bird food",
  },
  {
    name: "yummy",
    price: 0.01,
    inStock: true,
    brand: "Premium Bird Feed",
    img: "images/uh",
    alt: "bird food",
  },
  {
    name: "yummy",
    price: 0.01,
    inStock: true,
    brand: "Premium Bird Feed",
    img: "images/uh",
    alt: "bird food",
  },
  {
    name: "yummy",
    price: 0.01,
    inStock: true,
    brand: "Premium Bird Feed",
    img: "images/uh",
    alt: "bird food",
  },
  {
    name: "yummy",
    price: 0.01,
    inStock: true,
    brand: "Premium Bird Feed",
    img: "images/uh",
    alt: "bird food",
  },
  {
    name: "yummy",
    price: 0.01,
    inStock: true,
    brand: "Premium Bird Feed",
    img: "images/uh",
    alt: "bird food",
  },
  {
    name: "yummy",
    price: 0.01,
    inStock: true,
    brand: "Premium Bird Feed",
    img: "images/uh",
    alt: "bird food",
  },
  {
    name: "yummy",
    price: 0.01,
    inStock: true,
    brand: "Premium Bird Feed",
    img: "images/uh",
    alt: "bird food",
  },
  {
    name: "yummy",
    price: 0.01,
    inStock: true,
    brand: "Premium Bird Feed",
    img: "images/uh",
    alt: "bird food",
  },
  {
    name: "yummy",
    price: 0.01,
    inStock: true,
    brand: "Premium Bird Feed",
    img: "images/uh",
    alt: "bird food",
  },
  {
    name: "yummy",
    price: 0.01,
    inStock: true,
    brand: "Premium Bird Feed",
    img: "images/uh",
    alt: "bird food",
  },
  {
    name: "yummy",
    price: 0.01,
    inStock: true,
    brand: "Premium Bird Feed",
    img: "images/uh",
    alt: "bird food",
  },
  {
    name: "yummy",
    price: 0.01,
    inStock: true,
    brand: "Premium Bird Feed",
    img: "images/uh",
    alt: "bird food",
  },
  {
    name: "yummy",
    price: 0.01,
    inStock: true,
    brand: "Premium Bird Feed",
    img: "images/uh",
    alt: "bird food",
  },
  {
    name: "yummy",
    price: 0.01,
    inStock: true,
    brand: "Premium Bird Feed",
    img: "images/uh",
    alt: "bird food",
  },
];
//create inject function
function inject(item) {
  const child = document.querySelector("child");
  child.insertAdjacentHTML("afterbegin",
      `<div class="display-child">
      <img class="display-img" src="${item.name}"/>
      <h2 class="display-heading">${item.price}</h2>
      <h3 class="price">${} </h3>
    </div>`

    );
  //do something
  //query the container
  //using adjacent html push card into container
}
product.forEach ((product)=>inject(product));
//loop through items
// birdfood.forEach((food) => makeCard(food));
