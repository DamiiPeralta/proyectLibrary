const createBook = ({ title, year, author, genre, cover, publisher }) => {
  const book = document.createElement("div");
  book.classList.add("bookCard");
  book.innerHTML = `
    <div class="coverContainer">
      <img
        src="${cover}"
        alt="poster ${title}"
        class="cover"
      />
    </div>
    <h4 class="title">${title}</h4>
    <p class="author">${author}</p>
    <p class="genres">${genre}</p>
    <p class="publisher">${publisher}</p>
    <button id="openModal">Ver más</button>
    `;
  return book;
};

module.exports = createBook;
