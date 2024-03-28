/* 
<div class="checkGroup"> contenedor de todos los generos, aca voy a vaciar y appendear los nuevos.
<div>contenedor de un genero, esto voy a renderizar
    <input 
    type="checkbox"
    name="genre[]"
    id="idGenero-nombreMinuscula"
    value="valorGenero-NombreMayuscula"
    />
    <label for="valorGenero">
    <span>ValorGenero</span>
    </label>
</div>

*/

const arrayGenre= ["Novela","Romance","Sci-fi","Arte","Drama","Terror","Aventura"]

function renderGenre(genre){
    const divGenre = document.createElement('div');
    /* divGenre.classList.add('genre') */
    const id =  genre.toLowerCase();
    divGenre.innerHTML = `
    <div>
        <input
        type="checkbox"
        name="genre[]"
        id="${id}"
        value="${genre}"
        />
        <label for="${genre}"><span>${genre}</span></label>
    </div>
    `
    console.log('El genero se renderizó')
    return divGenre;
};

function dataToGenre(arrayGenre) {
    console.log('')
    const container = document.getElementById('checkboxContainer');
    container.innerHTML=``;
    const data = arrayGenre;
    const genres = data.map(renderGenre);
    for (let i = 0; i < genres.length; i+=2) {
        const divCheckGroup = document.createElement( 'div' );
        divCheckGroup.classList.add("checkGroup");
        divCheckGroup.appendChild(genres[i])
        divCheckGroup.appendChild(genres[i + 1])
        container.appendChild(divCheckGroup)
    }
    console.log('los generos se renderizaron y appendearon')
};

/* 
console.log('Antes del onload')
window.onload = () =>{
  console.log('Se ejecuto el onload')
  dataToGenre(sampleGenres)
}; */

module.exports={dataToGenre}
