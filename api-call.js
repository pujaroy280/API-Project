import axios from "axios";

/*
export async function getBooks(){
  const response = await axios.get("https://openlibrary.org/people/mekBot/books/currently-reading.json")
  return response.data
}
*/
export async function getBooks() {
  try {
    const response = await axios.get(
      "https://openlibrary.org/people/mekBot/books/currently-reading.json"
    );
    if (response.status !== 200) {
      throw new Error();
    }
    return response.data;
  } catch (err) {
    console.error("Uh oh! " + err);
  }
}

// export async function getData(url){
//   const response = await axios.get(url)
//   return response.data
// }
