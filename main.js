let clickMeButton = document.querySelector('#click-me-button');
let totalAmountHeading = document.querySelector('#total-amount-heading');

let totalAmount = 0;

clickMeButton.addEventListener('click', () => {
  totalAmount++;
  totalAmountHeading.textContent = totalAmount;
});
