// Define page paths (from project root)
const LOGIN_PAGE = "/auth/login.html";
const SIGNUP_PAGE = "/auth/signup.html";
const DASHBOARD_PAGE = "/pages/dashboard.html";

function signup() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (!name || !email || !password) {
    alert("Please fill in all fields!");
    return;
  }

  let user = { name, email, password };
  localStorage.setItem("user", JSON.stringify(user));

  alert("Account created successfully!");
  // Go to login page
  window.location.href = LOGIN_PAGE;
}

function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let savedUser = JSON.parse(localStorage.getItem("user"));

  if (!savedUser) {
    alert("No account found! Please sign up.");
    return;
  }

  if (email === savedUser.email && password === savedUser.password) {
    localStorage.setItem("loggedIn", "true");
    // Go to dashboard
    window.location.href = DASHBOARD_PAGE;
  } else {
    alert("Incorrect email or password!");
  }
}

function checkLogin() {
  if (localStorage.getItem("loggedIn") !== "true") {
    // If not logged in, send to login page
    window.location.href = LOGIN_PAGE;
    return;
  }

  let user = JSON.parse(localStorage.getItem("user"));
  const welcomeText = document.getElementById("welcomeText");
  if (welcomeText && user) {
    welcomeText.textContent = `Welcome, ${user.name}!`;
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = LOGIN_PAGE;
}

// mobile button (only if header exists on page)
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}
