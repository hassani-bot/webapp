// 1. Validate login form inputs
function validateLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("Please fill in both fields.");
    return false;
  }
  return true;
}

// 2. Validate email format
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// 3. Show a success message after form submission
function showSuccessMessage(message) {
  alert(`✅ Success: ${message}`);
}

// 4. Toggle password visibility
function togglePassword(id) {
  const input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}

// 5. Clear form fields
function clearForm(formId) {
  document.getElementById(formId).reset();
}

// 6. Disable submit button after click
function disableButton(btnId) {
  const btn = document.getElementById(btnId);
  btn.disabled = true;
  btn.innerText = "Processing...";
}

// 7. Show a confirmation before deleting
function confirmDelete(item) {
  return confirm(`Are you sure you want to delete ${item}?`);
}

// 8. Auto-fill form for testing
function autofillLogin() {
  document.getElementById("username").value = "testuser";
  document.getElementById("password").value = "password123";
}

// 9. Store username in local storage
function storeUsername() {
  const username = document.getElementById("username").value.trim();
  if (username) {
    localStorage.setItem("loggedInUser", username);
  }
}

// 10. Load stored username on page load
function loadUsername() {
  const storedUser = localStorage.getItem("loggedInUser");
  if (storedUser) {
    alert(`Welcome back, ${storedUser}!`);
  }
}

// OPTIONAL: Run this on login form submit
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      if (!validateLogin()) {
        e.preventDefault();
      } else {
        storeUsername();
      }
    });

    // Load stored user
    loadUsername();
  }
});
