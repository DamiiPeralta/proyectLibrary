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
    console.log('antes del if');
    if(title.includes(searchTerm.toLowerCase()) ||      author.includes(searchTerm.toLowerCase()) || genre.includes(searchTerm.toLowerCase())){
      console.log('en el if');
      filteredBooks.push(book);
      console.log('despues del push');
    };

  });
  console.log(filteredBooks);
  return filteredBooks;

} 


const search = async () => {
  const searchTerm = document.getElementById("searchInput").value;
  console.log(searchTerm);
  try {
    const { data } = await axios("http://localhost:3000/libros");
    const booksToFilter = data;
    const filteredBooks = filterBooks(searchTerm, booksToFilter);
    //document.getElementById('cardsContainer').innerHTML='';
    render(filteredBooks);
    
  } catch (error) {
    alert("Error al buscar los libros");
  }
};


/* 
function search() {
  const booksToFilter = getBooks();
  console.log("Se esta guardando antes de buscar.");
} */

module.exports = search;
