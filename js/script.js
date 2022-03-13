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

console.log(personalMuvieDB);