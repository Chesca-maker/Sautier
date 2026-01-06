document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Les mots de passe ne correspondent pas !");
  } else {
    alert("Inscription réussie !");
    window.location.href = "index.html";
  }
});
let users = JSON.parse(localStorage.getItem("users")) || [];

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  let user = users.find(u => u.email === email && u.password === password);
  if(user) {
    localStorage.setItem("isLoggedIn", "true");
    alert("Connexion réussie !");
    window.location.href = "index.html";
  } else {
    alert("Email ou mot de passe incorrect.");
  }
});

if(localStorage.getItem("isLoggedIn") == "true") {
  document.getElementById("menu").style.display = "block";
}
