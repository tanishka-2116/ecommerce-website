// PRODUCT LIST
const products = [
    { name: "Shoes", price: "₹1000", image: "../images/shoe.jpg" },
    { name: "Watch", price: "₹2000", image: "../images/watch.jpg" },
    { name: "Bag", price: "₹1500", image: "../images/bag.jpg" },
    { name: "Phone", price: "₹15000", image: "../images/phone.jpg" },
    { name: "Headphones", price: "₹2000", image: "../images/headphones.jpg" },
    { name: "Laptop", price: "₹50000", image: "../images/laptop.jpg" }
];

// DISPLAY PRODUCTS
const productContainer = document.getElementById("products");

products.forEach(product => {
    productContainer.innerHTML += `
        <div class="product" data-name="${product.name.toLowerCase()}">
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button>View</button>
        </div>
    `;
});

// SEARCH FUNCTION
const searchInput = document.getElementById("search");

searchInput.addEventListener("keyup", function () {
    let value = searchInput.value.toLowerCase();
    let productCards = document.querySelectorAll(".product");

    productCards.forEach(product => {
        let name = product.getAttribute("data-name");

        product.style.display = name.includes(value) ? "block" : "none";
    });
});
function showMessage() {
    document.getElementById("success-message").style.display = "block";
}
