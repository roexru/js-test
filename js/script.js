"use strict";

const numberOfFilms = prompt('Скольлко фильмов вы уже смотрели?', '');

const personalMuvieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private:false
};

const a = prompt('Один из просмотренных ранее фильмов?', ''),
	  b = prompt('На сколько оцените его?' ,''),
	  c = prompt('Один из просмотренных ранее фильмов?', ''),
	  d = prompt('На сколько оцените его?' ,'');

personalMuvieDB.movies[a] = b;
personalMuvieDB.movies[c] = d;

for (let i =0; i < 2; i++) {
	const a = prompt('Один из просмотренных ранее фильмов?', ''),
	      b = prompt('На сколько оцените его?' ,'');

	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMuvieDB.movies[a] = b;
		console.log(done);
	} else {
		console.log('error');
		i--;
	}
	
}

if(personalMuvieDB.count < 10) {
	console.log('Просмотрено довольно мало фильмов');
} else if (personalMuvieDB.count >= 10 && personalMuvieDB.count < 30) {
	console.log('Вы классический зритель');	
} else if (personalMuvieDB.count >= 30) {
	console.log('Вы киноман');
} else {
	console.log('Произошла ошибка');
}