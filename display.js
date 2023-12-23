// Function to display books in the container with cards
export function displayBooks(books, container) {
  container.innerHTML = "";
  books.forEach((bookObj) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    // Get title and author information
    const title = bookObj.work.title || "Unknown Title";
    const author = getAuthorName(bookObj) || "Unknown Author";

    // Display title and author in the card
    bookCard.innerHTML = `
        <div class="card-title"><strong>Title:</strong> ${title}</div>
        <div class="card-author"><strong>Author:</strong> ${author}</div>
      `;

    container.appendChild(bookCard);
  });
}

// Function to clear the content of a container
export function clearContainer(container) {
  container.innerHTML = "";
}
