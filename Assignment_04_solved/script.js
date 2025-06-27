const container = document.getElementById("card-container");
const errorDiv = document.getElementById("error");

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }
    return response.json();
  })
  .then(users => {
    users.forEach(user => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h2>${user.name}</h2>
        <p class="email">${user.email}</p>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Company:</strong> ${user.company.name}</p>
        <p><strong>City:</strong> ${user.address.city}</p>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    errorDiv.textContent = "Oops! Unable to load user data. Please try again later.";
    console.error("Error:", error);
  });
