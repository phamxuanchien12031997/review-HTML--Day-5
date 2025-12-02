const username = document.getElementById("userNameInput");
const emailInput = document.getElementById("emailInput");
const tbody = document.getElementById("user-tbody");
const form = document.getElementById("user-form");

let index = 1;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = username.value.trim();
  const email = emailInput.value.trim();

  if (!user || !email) return;

  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${index++}</td>
    <td>${user}</td>
    <td>${email}</td>
    <td><button class="deleteBtn">Delete</button></td>
    `;
  tbody.appendChild(tr);

  username.value = "";
  emailInput.value = "";
});

tbody.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteBtn")) {
    e.target.parentElement.parentElement.remove();
  }
});
