const DOMSelectors = {
button: document.getElementById("btn"),
name: document.querySelector("#name"),
price: document.querySelectorAll(".price"),
box: document.getElementById(".child"),
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
}
];
function inject(EverythingBirds){
    const child = document.querySelector(".child");
    child.insertAdjacentHTML(
        "afterbegin",
        
    )
}