document.addEventListener('DOMContentLoaded', () => {
    const tabLinks = document.querySelectorAll('.tab-link');
    const imageSection = document.querySelector('.image-section');
  
    const tabContents = {
      product: '<img src="https://i.pinimg.com/736x/02/a6/b7/02a6b737e8b749d0313ab3d44604910a.jpg" alt="Lips Product Image" class="product-image">',
      description: '<div class="tab-content-text">Description of the product goes here.</div>',
      notes: '<div class="tab-content-text">Notes about the product go here.</div>',
      reviews: '<div class="tab-content-text">Customer reviews will be shown here.</div>',
    };
  
    tabLinks.forEach(link => {
      link.addEventListener('mouseover', () => {
        const target = link.dataset.target;
  
        // Remove active class and add it to the hovered tab
        tabLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
  
        // Add slide-down effect
        imageSection.classList.add('slide-down');
        setTimeout(() => {
          imageSection.innerHTML = tabContents[target]; // Update content
          imageSection.classList.remove('slide-down');
        }, 300); // Match animation duration
      });
    });
  });
  document.querySelectorAll('.lip-shade-box').forEach(box => {
    box.addEventListener('click', function () {
      // Remove the 'selected' class from all lip shade boxes
      document.querySelectorAll('.lip-shade-box').forEach(b => b.classList.remove('selected'));
      // Add the 'selected' class to the clicked box
      this.classList.add('selected');
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const addToCartButton = document.querySelector('.add-to-cart');
    const cartCount = document.getElementById('cart-count');

    let currentCount = parseInt(cartCount.textContent) || 0;

    addToCartButton.addEventListener('click', function() {
        currentCount += 1;  // Increment the cart count
        cartCount.textContent = currentCount;  // Update the display
    });
});