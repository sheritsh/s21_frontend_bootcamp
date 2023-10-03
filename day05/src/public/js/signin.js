document.querySelector('.login_form__btn').addEventListener('click', async (e) => {
  e.preventDefault();

  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;

  const response = await fetch('/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (response.status === 401 || response.status === 404) {
    const errorMessage = await response.json();
    document.querySelector('.error-message').textContent = errorMessage.message;
  } else if (response.status === 200) {
    setTimeout(() => {
      window.location.href = '/';
    }, 1000);
  }
});
