// _________________________________ (TASK 01 _ toggle image) ____________________________________

const img = document.getElementById("image");
const button = document.getElementById("toggleButton");

const daySrc = "./images/day.jpg";
const nightSrc = "./images/night.jpg";

function toggleTime() {
  if (img.src.endsWith("day.jpg")) {
    img.src = nightSrc;
    button.textContent = "Day";
  } else {
    img.src = daySrc;
    button.textContent = "Night";
  }
}

img.addEventListener("mouseover", () => {
  img.style.boxShadow = "0 0 20px  yellow;";
  img.style.border = "5px solid #4A2C2A;";
});

img.addEventListener("mouseout", () => {
  img.style.boxShadow = "none";
  img.style.border = "5px solid transparent";
});

// _________________________________ (TASK 02 _ Content Replacement) ____________________________________

const listItems = document.querySelectorAll("#itemList li");

listItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.innerHTML = `
      <strong>Clicked Item ${index + 1}!!</strong><br>
      <button onclick="alert('More Info for Item ${index + 1}')">Details</button>
    `;
  });
});

// _________________________________ (TASK 03 _ Add Elements Dynamically) ____________________________________

document.getElementById("addElementBtn").addEventListener("click", () => {
  const headingLevel = prompt("Enter heading level (h1, h2, h3, etc.):");
  const headingText = prompt("Enter text for heading:");
  const paragraphText = prompt("Enter paragraph text:");

  if (!/^h[1-6]$/.test(headingLevel)) {
    alert("Invalid heading level!");
    return;
  }

  const heading = document.createElement(headingLevel);
  heading.textContent = headingText;

  const paragraph = document.createElement("p");
  paragraph.textContent = paragraphText;

  const container = document.getElementById("contentContainer");
  container.appendChild(heading);
  container.appendChild(paragraph);
});

// _________________________________ (TASK 04 _ Form Validation) ____________________________________

document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  const name = document.getElementById("name").value.trim();
  const password = document.getElementById("password").value.trim();
  const comments = document.getElementById("comments").value.trim();

  const nameError = document.getElementById("nameError");
  const passwordError = document.getElementById("passwordError");
  const commentsError = document.getElementById("commentsError");

  nameError.textContent = "";
  passwordError.textContent = "";
  commentsError.textContent = "";

  if (!/^[a-zA-Z ]{3,}$/.test(name)) {
    nameError.textContent = "Name must be at least 3 characters and contain only letters and spaces.";
    isValid = false;
  }

  if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^\\w\\s]).{8,}/.test(password)) {
    passwordError.textContent = "Password must include uppercase, lowercase, number, special char & 8+ chars.";
    isValid = false;
  }

  if (comments === "" || comments.length > 200) {
    commentsError.textContent = "Comments must not be empty and must be under 200 characters.";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    this.reset();
  }
});