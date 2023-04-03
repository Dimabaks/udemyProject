const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const  a = prompt("Один из последних просмотренных фильмов?", " "),
           b = prompt("На сколько оцените его?", "");

           personalMovieDB.movies[a] = b;

    if(a === " " && a === null && b === " " && b === null && a.length < 50 ) {
      console.log('error');
      i--;
    } else {
        console.log("done");
    }

    if (personalMovieDB.count < 10) {
        console.log("Просмотрено слишком мало фильмов")
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель")
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман")
    } else {
        console.log("Произошла ошибка!")
    }
}



console.log(personalMovieDB)