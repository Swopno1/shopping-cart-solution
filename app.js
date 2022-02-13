function getInputValue(product) {
  const input = document.getElementById(product + "-number");
  const inputValue = parseInt(input.value);

  return inputValue;
}

// Calculate subtotal
function calculateTotal() {
  const phoneTotal = getInputValue("phone") * 1219;
  const caseTotal = getInputValue("case") * 59;
  const subTotal = phoneTotal + caseTotal;
  const taxt = subTotal / 10;
  const netTotal = subTotal + taxt;

  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax-amount").innerText = taxt;
  document.getElementById("total-price").innerText = netTotal;
}

// Update product quantity
function updateNumber(product, price, isIncreasing) {
  const qtyInput = document.getElementById(product + "-number");
  let currentQty = qtyInput.value;

  if (isIncreasing) {
    currentQty = parseInt(currentQty) + 1;
  } else if (currentQty > 0) {
    currentQty = parseInt(currentQty) - 1;
  }

  qtyInput.value = currentQty;

  // Update product price total
  const productTotal = document.getElementById(product + "-total");
  productTotal.innerText = currentQty * price;

  // Update Total Subtotal
  calculateTotal();
}

// Handle increase
document.getElementById("phone-plus").addEventListener("click", function () {
  updateNumber("phone", 1219, true);
  calculateTotal();
});
// Handle decrease
document.getElementById("phone-minus").addEventListener("click", function () {
  updateNumber("phone", 1219, false);
});

// Handle increase
document.getElementById("case-plus").addEventListener("click", function () {
  updateNumber("case", 59, true);
});
// Handle decrease
document.getElementById("case-minus").addEventListener("click", function () {
  updateNumber("case", 59, false);
});
