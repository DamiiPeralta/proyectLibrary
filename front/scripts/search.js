const axios = require("axios");
const render = require("./render");

function filterBooks(searchTerm, books) {
  
  if (!searchTerm || searchTerm == "") {
    return books;
  }
  
  let filteredBooks = [];
  books.forEach(book => {
    const title = book.title.toLowerCase();
    const author = book.author.toLowerCase();
    const genre = book.genre.map((genre) => genre.toLowerCase());
    if(title.includes(searchTerm.toLowerCase()) ||      author.includes(searchTerm.toLowerCase()) || genre.includes(searchTerm.toLowerCase())){
      filteredBooks.push(book);
    };

  });
  return filteredBooks;

} 

const search = async () => {
  const searchTerm = document.getElementById("searchInput").value;
  console.log(searchTerm);
  try {
    const { data } = await axios("http://localhost:3000/libros");
    const booksToFilter = data;
    const filteredBooks = filterBooks(searchTerm, booksToFilter);
    render(filteredBooks);
    
  } catch (error) {
    alert("Error al buscar los libros");
  }
};


module.exports = search;
