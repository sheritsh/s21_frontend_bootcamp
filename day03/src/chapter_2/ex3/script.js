document.addEventListener("DOMContentLoaded", function () {
  const display = document.querySelector(".display input");
  const buttons = document.querySelectorAll(".calculator div:not(.display)");

  function clearDisplay() {
    display.value = "";
  }

  function addToDisplay(value) {
    display.value += value;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const buttonText = button.textContent;

      if (buttonText === "=") {
        try {
          const input = display.value.replaceAll('x', '*');
          display.value = eval(input);
        } catch (error) {
          display.value = "Error";
        }
      } else if (buttonText === "C") {
        clearDisplay();
      } else {
        addToDisplay(buttonText);
      }
    });
  });
});
