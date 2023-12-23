// Import necessary modules
import axios from "axios";
import { getBooks } from "./api-call.js";

// Wait for the DOM to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", async () => {
  // Get the container element for displaying books
  const booksContainer = document.getElementById("books-container");

  // Fetch book data using the getBooks function
  const bookData = await getBooks();
  // Extract the array of books from the data
  const booksArray = bookData.reading_log_entries;  // Retreive properties of the ojbect in the keys of the JSON data
  console.log(booksArray); // Print in console to view the data

  // Function to display books in the container with cards
  function displayBooks(books) {
    booksContainer.innerHTML = "";
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

      booksContainer.appendChild(bookCard);
    });
  }

  // Function to filter and display books based on the publish year
  function filterBooksAndDisplay(publishYear) {
    const filteredBooks = booksArray.filter((bookObj) => bookObj.work.first_publish_year === publishYear);
    displayBooks(filteredBooks);
  }

  // Function to display all books sorted alphabetically by title
  function showAll() {
    const allBooks = [...booksArray];
    // Sort books alphabetically based on the title
    allBooks.sort((a, b) => (a.work.title || "").localeCompare(b.work.title || ""));
    // Display the sorted books
    displayBooks(allBooks);
  }

  // Function to get the author name from the book object
  function getAuthorName(bookObj) {
    // Modify this function based on the actual structure of your data
    // Assuming the author's name is in the 'author_names' property
    return bookObj.work.author_names || "Unknown Author";
  }

  // Set up event listeners for the buttons
  document.getElementById("button-1999").addEventListener("click", () => filterBooksAndDisplay(1999));
  document.getElementById("button-2000").addEventListener("click", () => filterBooksAndDisplay(2000));
  document.getElementById("button-2002").addEventListener("click", () => filterBooksAndDisplay(2002));
  document.getElementById("button-2014").addEventListener("click", () => filterBooksAndDisplay(2014));
  document.getElementById("button-2016").addEventListener("click", () => filterBooksAndDisplay(2016));
  document.getElementById("button-show").addEventListener("click", showAll);
});
