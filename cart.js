document.addEventListener("DOMContentLoaded", () => {
    // Select relevant elements
    const cartItem = document.querySelector(".cart-item");
    const quantityDropdown = cartItem.querySelector(".quantity-dropdown");
    const subtotalElement = document.getElementById("subtotal");
    const totalElement = document.getElementById("total");
    const discountInput = document.querySelector(".discount-code input");
    const applyDiscountButton = document.querySelector(".apply-code");

    // Initial price data
    const itemPrice = parseFloat(cartItem.querySelector(".price").textContent.replace("$", ""));
    let discountValue = 0;

    // Function to update totals
    function updateTotals() {
        const quantity = parseInt(quantityDropdown.value);
        const subtotal = itemPrice * quantity;
        const total = subtotal - discountValue;

        // Update the displayed values
        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        totalElement.textContent = `$${total.toFixed(2)}`;
    }

    // Listen for quantity changes
    quantityDropdown.addEventListener("change", updateTotals);

    // Listen for discount code application
    applyDiscountButton.addEventListener("click", () => {
        const discountCode = discountInput.value.trim();

        if (discountCode === "DISCOUNT10") {
            discountValue = 10; // Apply $10 discount
            alert("Discount code applied: $10 off!");
        } else {
            discountValue = 0;
            alert("Invalid discount code.");
        }

        updateTotals();
    });

    // Initialize totals on page load
    updateTotals();
});
// Example: Storing order details in localStorage
const orderData = [
    {
        name: "Product 1",
        price: 29.99,
        quantity: 1,
        image: "product1.jpg"
    },
    {
        name: "Product 2",
        price: 49.99,
        quantity: 2,
        image: "product2.jpg"
    }
];

// Store this in localStorage
localStorage.setItem('orderData', JSON.stringify(orderData));
