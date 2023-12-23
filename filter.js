// Function to filter books by the publish year
export function filterBooksByYear(booksArray, publishYear) {
  return booksArray.filter(
    (bookObj) => bookObj.work.first_publish_year === publishYear
  );
}

// Function to sort books alphabetically by title
export function sortBooksAlphabetically(booksArray) {
  return [...booksArray].sort((a, b) =>
    (a.work.title || "").localeCompare(b.work.title || "")
  );
}
