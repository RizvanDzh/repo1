'use strict';
//lesson4

let numberOfFilms;

let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: function () {
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
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман');
    } else {
      console.log('Произошла ошибка');
    }
  },
  showMyDB: function (hidden) {
    if (hidden == false) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`).toLocaleLowerCase();

      if (genre == '' || genre == null) {
        console.log('Вы ввели некорректные данные или не ввели их вообще');
        i--;
      } else {
        personalMovieDB.genres.push(genre);
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = 'false';
    } else {
      personalMovieDB.privat = 'true';
    }
  },
};
