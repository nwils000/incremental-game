let clickMeButton = document.querySelector('#click-me-button');
let totalAmountHeading = document.querySelector('#total-amount-heading');

let totalAmount = 0;
let autoClickInterval = 500;
let intervalId = null;

function autoClicker() {
  totalAmount++;
  totalAmountHeading.textContent = totalAmount;
}

clickMeButton.addEventListener('click', () => {
  totalAmount++;
  totalAmountHeading.textContent = totalAmount;

  if (totalAmount >= 10) {
    clearInterval(intervalId);
    intervalId = setInterval(autoClicker, autoClickInterval);
  }
});
