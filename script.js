const toggleButtons = document.querySelectorAll('.toggle input[type="checkbox"]');

toggleButtons.forEach((button) => {
  button.addEventListener('change', (event) => {
    const price = event.target.closest('.price-col').querySelector('h3');
    if (event.target.checked) {
      price.textContent = parseInt(price.textContent, 10) * 12;
    } else {
      price.textContent = parseInt(price.textContent, 10) / 12;
    }
  });
});