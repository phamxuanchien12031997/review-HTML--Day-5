const productForm = document.getElementById("productForm");
const productInput = document.getElementById("productInput");
const priceInput = document.getElementById("priceInput");
const tbody = document.querySelector("#productTable tbody");

let index = 1;

productForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = productInput.value.trim();
  const price = priceInput.value.trim();
  const tr = document.createElement("tr");

  tr.innerHTML = `
        <td>${index++}</td>
        <td>${name}</td>
        <td>${price}</td>
        <td><button class="deleteBtn">Delete</button></td>
    `;

  tbody.appendChild(tr);

  productInput.value = "";
  priceInput.value = "";
});

tbody.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteBtn")) {
    e.target.parentElement.parentElement.remove();
  }
});
