// login.js

const correctPassword = "alba"; // Remplacez par le mot de passe souhaité

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const passwordInput = document.getElementById("password");
  const enteredPassword = passwordInput.value.trim();

  if (enteredPassword === correctPassword) {
    window.location.href = "main.html"; // Redirige vers la page principale en cas de succès de l'authentification
  } else {
    alert("Incorrect password. Please try again.");
  }
});