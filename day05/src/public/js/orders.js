const orderForm = document.getElementById('orderForm');

// Form Handler
orderForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const selectedWaiterIndex = Number(orderForm.elements.waiter.value) + 1;

  const selectedMenuItems = Array.from(orderForm.querySelectorAll('input[type="checkbox"]:checked'))
    .map((checkbox, idx) => idx + 1);

  const orderData = {
    userId: selectedWaiterIndex,
    items: selectedMenuItems,
    isActive: true,
  };

  try {
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    if (response.status === 201) {
      const newOrder = await response.json();
      orderForm.reset();
      setTimeout(() => {
        window.location.href = `/orders/${newOrder.id}`;
      }, 1500);
    }
  } catch (error) {
    console.error('Error create order:', error);
  }
});

// Button Valid Check
const menuCheckboxes = document.querySelectorAll('.form-check-input');
const orderButton = document.getElementById('liveToastBtn');

menuCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    const atLeastOneChecked = [...menuCheckboxes].some((chkbox) => chkbox.checked);
    orderButton.disabled = !atLeastOneChecked;
  });
});
