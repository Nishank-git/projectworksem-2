const cartBtn = document.getElementById("cartBtn");

cartBtn.addEventListener("click", () => {
    alert("Cart feature coming soon!");
});

const addButtons = document.querySelectorAll(".product-card button");

addButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Product added to cart!");
    });
});