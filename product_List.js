document.addEventListener('DOMContentLoaded', () => {
    // Dropdown toggle
    document.querySelectorAll('.dropdown-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const dropdown = btn.parentElement;
        dropdown.classList.toggle('active');
      });
    });
  
    // Price Range Slider
    const priceRange = document.getElementById('price-range');
    const priceValue = document.getElementById('price-value');
  
    priceRange.addEventListener('input', () => {
      priceValue.textContent = `$10 - $${priceRange.value}`;
    });
  
    // Checkbox Filters
    document.querySelectorAll('.dropdown-content input[type="checkbox"]').forEach((checkbox) => {
      checkbox.addEventListener('change', (event) => {
        const value = event.target.value;
  
        if (event.target.checked) {
          console.log(`${value} filter selected`);
        } else {
          console.log(`${value} filter deselected`);
        }
      });
    });
  
    // Radio Buttons for Sorting
    document.querySelectorAll('.dropdown-content input[type="radio"]').forEach((radio) => {
      radio.addEventListener('change', (event) => {
        const value = event.target.value;
        console.log(`Sort by: ${value}`);
      });
    });
  });
  
  