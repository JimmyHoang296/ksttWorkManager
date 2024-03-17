const URL =
  "https://script.google.com/macros/s/AKfycbw-O9yFlUfp_KCiTInrBxv9SlvwGuz-VGVdz_D5sFpD8wN9PywI59RSqM2iguji_XlC/exec";

const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMessage = document.querySelector(".error-message");

// add event listener

// handle Login

async function handleLogin(event) {
  event.preventDefault(); // Prevent default form submission

  const username = usernameInput.value;
  const password = passwordInput.value;

  const loginData = {
    type: "login",
    data: {username,password}
  };

  console.log(loginData)

  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(loginData),
    });

    const data = await response.json();

    if (data.success) {
      // Login successful (replace with your desired action)
      alert("Login successful!");
      // You can redirect to another page here:
      // window.location.href = "success.html";
    } else {
      errorMessage.textContent = data.message || "Login failed";
      errorMessage.style.display = "block";
    }
  } catch (error) {
    console.error('Error:', error);
    errorMessage.textContent = "An error occurred. Please try again.";
    errorMessage.style.display = "block";
  }
}

loginForm.addEventListener('submit', handleLogin);

usernameInput.addEventListener("input", () => {
  errorMessage.style.display = "none";
});
passwordInput.addEventListener("input", () => {
  errorMessage.style.display = "none";
});
