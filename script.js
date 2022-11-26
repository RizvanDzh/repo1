//lesson1

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//const lastFilm = prompt("Один из последних просмотренных фильмов?", "");
//const filmScore = +prompt("На сколько оцените его?", "");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// lesson2

for (let i = 0; i < 2; i++) {
  const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
  const filmScore = +prompt('На сколько оцените его?', '');

  if (lastFilm != null && filmScore != null && lastFilm != null && filmScore != null && lastFilm.length < 50) {
    personalMovieDB.movies[lastFilm] = filmScore;
    console.log('done');
  } else {
    console.log('Error');
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
  console.log('Вы киноман');
} else {
  console.log('Произошла ошибка');
}

console.log(personalMovieDB);
