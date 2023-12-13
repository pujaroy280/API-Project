import axios from "axios";
import { getBooks } from "./api-call.js";

document.addEventListener("DOMContentLoaded", async () => {
  const booksContainer = document.getElementById("books-container");
  const bookData = await getBooks();
  const booksArray = bookData.reading_log_entries;

  function displayTitles(titles) {
    booksContainer.innerHTML = "";
    titles.forEach((title) => {
      const bookTitle = document.createElement("div");
      bookTitle.innerHTML = title;
      booksContainer.appendChild(bookTitle);
    });
  }

  function filterBooksAndDisplay(publishYear) {
    const filteredTitles = booksArray
      .filter((bookObj) => bookObj.work.first_publish_year === publishYear)
      .map((bookObj) => bookObj.work.title);
    displayTitles(filteredTitles);
  }

  function showAll() {
    const allTitles = booksArray.map((bookObj) => bookObj.work.title);
    displayTitles(allTitles);
  }

  // Set up event listeners for the buttons
  document.getElementById("button-1999").addEventListener("click", () => filterBooksAndDisplay(1999));
  document.getElementById("button-2000").addEventListener("click", () => filterBooksAndDisplay(2000));
  document.getElementById("button-2002").addEventListener("click", () => filterBooksAndDisplay(2002));
  document.getElementById("button-2014").addEventListener("click", () => filterBooksAndDisplay(2014));
  document.getElementById("button-2016").addEventListener("click", () => filterBooksAndDisplay(2016));
  document.getElementById("button-show").addEventListener("click", showAll);
});
