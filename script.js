//lesson1

let numberOfFilms;
//const lastFilm = prompt("Один из последних просмотренных фильмов?", "");
//const filmScore = +prompt("На сколько оцените его?", "");

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// lesson2

function rememberMyFilms() {
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
}

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }
}

//start();
//rememberMyFilms();
//detectPersonalLevel();

//console.log(personalMovieDB);

//  lesson3

function showMyDB(private) {
  if (private == false) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
  }
}

writeYourGenres();
