import { movies } from "./data.js";

// Iteración 1: todos los directores
// Necesitamos obtener la matriz de todos los directores. Dado que esto es un calentamiento, le daremos una pista: debe mapear el conjunto de películas y reunir a todos los directores en un conjunto como resultado final. Continúe y cree una función denominada getAllDirectors()que reciba una matriz de películas como argumento y devuelva una nueva matriz ( mapeada ).

// Bonificación: Iteración 1.1: Limpiar el conjunto de directores
// Parece que algunos de los directores habían dirigido varias películas, por lo que aparecerán varias veces en la lista de directores. ¿Cómo podrías "limpiar" un poco esta matriz y unificarla (es decir, sin duplicados)? No priorices la parte de bonificación ahora, puedes volver a ella cuando hayas terminado con las iteraciones obligatorias. 😉

// const getAllDirectors = (array) => {
//   const directors = array.map((element) => {
//     return element.director;
//   });
//   return directors;
// };
// console.log( getAllDirectors(movies));

// Iteración 2: Steven Spielberg. ¿El mejor?
// Uno de los directores de cine más famosos es Steven Spielberg , y tiene algunas películas dramáticas realmente impresionantes que están en nuestra lista, pero queremos saber cuántas de ellas hay.

// Continúe y cree una howManyMovies()función que reciba una matriz como parámetro y filter👀 la matriz para que podamos tener solo las películas dramáticas donde Steven Spielberg es el director.

// const howManyMovies = (array) =>{
// const spielbergDramaMovies= array.filter((movie)=>{
//     return movie.director==='Steven Spielberg' && movie.genre.includes("Drama") === true

// })
//   return   spielbergDramaMovies
// }
// console.log(howManyMovies(movies));

// Iteración 3: promedio de todas las puntuaciones
// Estas son las mejores películas según sus puntuaciones, por lo que supuestamente todas tienen una puntuación notable. En esta iteración, queremos saber la puntuación media de todos ellos y mostrarla en la consola. Crea una scoresAverage()función que reciba una matriz como parámetro y resuelva el desafío.

// ¡La puntuación debe devolverse redondeada a 2 decimales!

// 💡 Quizás quieras "reducir" los datos a un solo valor. 😉

// const scoresAverage = (array) => {
//   const movieAddScore = array.reduce((acc, movie) => {
// return (acc+movie.score)
//   },0);
//   let mediaScore = movieAddScore / array.length;
//   return mediaScore.toFixed(2)

// };
// console.log(scoresAverage(movies));

// Iteración 4: películas dramáticas
// El drama es el género que más se repite en nuestro array. ¡Aparentemente a la gente le encanta el drama! 👀

// ¡Cree una dramaMoviesScore()función que reciba una matriz como parámetro para obtener la puntuación promedio de todas las películas dramáticas! A ver si es mejor que la media general.

// Nuevamente, ¡redondeado a 2 decimales!

// const dramaMoviesScore = (array) => {
//   const dramaMovies = array.filter((movie) => {
//     return movie.genre.includes("Drama");
//   });

//   const scoreDrama = dramaMovies.reduce((acc, movie) => {
//     return acc + movie.score;
//   }, 0);

//   let mediaScoreDrama = scoreDrama / dramaMovies.length ;

//   return mediaScoreDrama.toFixed(2);
// };

// console.log(dramaMoviesScore(movies));

// Iteración 5: Ordenar por año
// Necesitamos ordenar las películas en orden ascendente según su año de estreno. Esto debería ser fácil usando uno de los métodos que acabamos de aprender. 😉 Cree una función orderByYear()que reciba una matriz como parámetro y devuelva una nueva matriz ordenada .

// Si dos películas tienen el mismo año, ordénalas alfabéticamente por título. ✔️

// ⚠️ Importante: su función debería devolver una nueva matriz que contenga las películas ordenadas por año. Su función no debe modificar (mutar) la matriz original. Es posible que necesites investigar un poco sobre cómo hacer una "copia" o "clonación" de una matriz.

// const movies2 = [...movies];
// const orderByYear = (array) => {
//   array.sort((a, b) => {
//     if (a.year < b.year) return -1;
//     if (a.year > b.year) return 1;
//     else {
//       if (a.title > b.title) return 1;
//       else if (a.title < b.title) return -1;
//       return 0;
//     }
//   });
//   return array
// };
// console.log(orderByYear(movies2));

// Iteración 6: orden alfabético
// Otra forma popular de ordenar las películas es ordenarlas alfabéticamente usando la titletecla. Sin embargo, en este caso, sólo necesitamos imprimir el título de los primeros 20. Fácil para un experto como tú. 😉

// Cree una orderAlphabetically()función que reciba una matriz y devuelva una matriz de los primeros 20 títulos, ordenados alfabéticamente. Devuelve solo el título de cada película y, si la matriz que recibes tiene menos de 20 películas, devuélvelas todas.

// ⚠️ Importante: su función debe devolver una nueva matriz que contenga objetos de película ordenados alfabéticamente. Su función no debe modificar (mutar) la matriz original. Es posible que necesites investigar un poco sobre cómo hacer una "copia" o "clonación" de una matriz.

const movies2 = [...movies];

const orderAlphabetically = (array) => {
    array.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      });
      return array.slice(0,20)
    }
console.log(orderAlphabetically(movies2));
