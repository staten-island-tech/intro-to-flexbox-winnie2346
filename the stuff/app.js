const birdfood = [
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
function inject(birdfood) {
  const child = document.querySelector("child");
  child.insertAdjacentHTML(
    "afterbegin",
    `<div class="child">
      <img class="child-img" src="${birdfood.img}"/>
      <h2 class="child-heading">${birdfood.brand}</h2>
      <h3 class="price">${birdfood.price} </h3>
    </div>`
  );

  //do something
  //query the container
  //using adjacent html push card into container
}
birdfood.forEach((birdfood) => inject(birdfood));
//loop through items
// birdfood.forEach((food) => makeCard(food));
function addToCart() {
  const buttons = document.querySelectorAll("button");
  const btnArray = Array.from(buttons);
  console.log(buttons);
  btnArray.forEach(
    (btn) => btn.addEvenListener("click"),
    function (event) {}
  );
  console.log(event.target.textContent);
  console.log(event.target.closest("display-cart").getattribute("data-title"));
  //find item in the array
  //take that object and push into cart
}
addToCart(); //made an array
//using for each to put array of cards on screen
//work on add to cart(array)
