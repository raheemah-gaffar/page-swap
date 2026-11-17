const greeting = document.querySelector("#greeting");
const hour = new Date().getHours();
let greetingText = "";

if (hour < 12) {
  greetingText = "Good morning! Start your day with a good book. Friday's swap starts at 4:00 PM.";
} else if (hour < 17) {
  greetingText = "Good afternoon! Take a break and enjoy a good read. Friday's swap starts at 4:00 PM.";
} else {
  greetingText = "Good evening! Pick your next read for Friday's debate.";
}

greeting.textContent = greetingText;

const themeButton = document.querySelector("#theme-toggle");

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeButton.textContent = "Light Mode";
  } else {
    themeButton.textContent = "Dark Mode";
  }
});

const genres = [
  "Mystery, Thriller & Crime: Twists, turns, and suspenseful plots that will keep you guessing until the last page.",
  "African & Diaspora Fiction: Stories that explore the richness of African and diaspora experiences, culture, and identity.",
  "Romance: Heartwarming tales of love, relationships, and emotional connections that will make you smile."
];

const genresList = document.querySelector("#genres-list");

for (const item of genres) {
  const parts = item.split(": ");
  const card = document.createElement("li");

  const title = document.createElement("h3");
  title.textContent = parts[0];

  const desc = document.createElement("p");
  desc.textContent = parts[1] || "";

  card.appendChild(title);
  card.appendChild(desc);
  genresList.appendChild(card);
}

const swapForm = document.querySelector("#swap-form");
const formMessage = document.querySelector("#form-message");
const meetupList = document.querySelector("#meetup-list");
const bookCount = document.querySelector("#book-count");

function updateCount() {
  const total = meetupList.children.length;

  if (total === 1) {
    bookCount.textContent = "1 book registered";
  } else {
    bookCount.textContent = total + " books registered";
  }
}

updateCount();

swapForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = document.querySelector("#book-title").value.trim();
  const author = document.querySelector("#book-author").value.trim();
  const genre = document.querySelector("#book-genre").value.trim();
  const name = document.querySelector("#reader-name").value.trim();

  if (title === "" || author === "" || genre === "" || name === "") {
    formMessage.textContent = "Please fill in all four fields before registering.";
    formMessage.className = "error";
  } else {
    const newBook = document.createElement("li");
    newBook.textContent = `${title} by ${author} (${genre}) - Registered by ${name}`;
    meetupList.appendChild(newBook);

    updateCount();
    swapForm.reset();
    document.querySelector("#book-title").focus();

    formMessage.textContent = "Book has been successfully registered for the meetup!";
    formMessage.className = "success";
  }
});