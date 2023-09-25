const form = document.querySelector('.login_form__main-body');
const errorMessage = document.querySelector('.error-message');
const signupButton = form.querySelector('.login_form__btn');
const usernameInput = form.querySelector('input[name="username"]');
const passwordInput = form.querySelector('input[name="password"]');
const confirmPasswordInput = form.querySelector('input[name="confirm_password"]');
const roleInput = form.querySelector('select[name="role"]');

// Button Lock
function isFormValid() {
  return (
    usernameInput.value.trim() !== ''
    && passwordInput.value.trim() !== ''
    && confirmPasswordInput.value.trim() !== ''
    && roleInput.value.trim() !== ''
  );
}

// Обработчик события изменения полей ввода
form.addEventListener('input', () => {
  if (isFormValid()) {
    signupButton.removeAttribute('disabled'); // Разблокировать кнопку
  } else {
    signupButton.setAttribute('disabled', true); // Заблокировать кнопку
  }
});

// SignUp Attempt
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = form.querySelector('input[name="username"]').value;
  const password = form.querySelector('input[name="password"]').value;
  const confirmPassword = form.querySelector('input[name="confirm_password"]').value;
  const role = form.querySelector('select[name="role"]').value;

  if (password !== confirmPassword) {
    errorMessage.textContent = 'Password and confirm password do not match';
    errorMessage.style.color = 'red';
    return;
  }

  const response = await fetch('/api/create_waiter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password, role }),
  });

  const data = await response.json();

  if (response.status === 201) {
    errorMessage.textContent = 'User registered successfully';
    errorMessage.style.color = 'green';
    form.reset();
    setTimeout(() => {
      window.location.href = '/signin';
    }, 1500);
  } else {
    errorMessage.textContent = data.message;
    errorMessage.style.color = 'red';
  }
});
