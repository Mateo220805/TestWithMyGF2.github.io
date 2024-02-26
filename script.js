function toggleVisibility(hideSelector, showSelector) {
  // Ocultar elementos seleccionados por el selector
  document.querySelectorAll(hideSelector).forEach(function(element) {
    element.classList.add('hidden');
  });

  // Mostrar elementos seleccionados por el selector
  document.querySelectorAll(showSelector).forEach(function(element) {
    element.classList.remove('hidden');
  });
}

// Event listeners for login and logout
document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    if (username) {
      localStorage.setItem('username', username);
      document.getElementById('user-name').textContent = username;
      toggleVisibility('.full-page-background', '#diary-page');
    } else {
      alert('Por favor, ingresa tu nombre.');
    }
  });

  document.getElementById('logout').addEventListener('click', function () {
    localStorage.removeItem('username');
    toggleVisibility('#diary-page', '.full-page-background');
  });

  // Check for stored username
  const storedUsername = localStorage.getItem('username');
  if (storedUsername) {
    document.getElementById('username').value = storedUsername;
    document.getElementById('user-name').textContent = storedUsername;
    toggleVisibility('.full-page-background', '#diary-page');
  } else {
    // Si no hay un usuario almacenado, asegúrate de que se muestre el fondo al cargar la página.
    toggleVisibility('#diary-page', '.full-page-background');
  }
});
