import {makeAutoObservable} from "mobx";

export default class BookStore{
    constructor() {
        this._age = [
            {id: 1, name: "16"},
            {id: 2, name: "18"}
        ]
        this._genre = [
            {id: 3, name: "Русская классика"},
            {id: 4, name: "Зарубежная классика"}
        ]
        this._time = [
            {id: 1, name: "19 век"},
            {id: 2, name: "20 век"}
        ]
        this._sentiment = [
            {id: 1, name: "положительный"},
            {id: 2, name: "отрицательный"},
            {id: 3, name: "нейтральный"}
        ]
        this._colour = [
            {id: 1, name: "красный"},
            {id: 2, name: "белый"},
            {id: 3, name: "черный"}
        ]
        this._weather = [
            {id: 1, name: "пасмурно"},
            {id: 2, name: "солнечно"},
            {id: 3, name: "облачно"}
        ]
        this._book = [
            {id:5, name:"Преступление и наказание", author:"Достоевский Федор Михайлович", img:"d0e55142-b263-42ac-9d82-01cc6a0fef8d.jpg",genreId:3, timeId:1, ageId:7, sentimentId:2, colourId:1, weatherId:1}
        ]
        makeAutoObservable(this)

    }
    setAge(age) {
        this._age = age
    }
    setGenre(genre) {
        this._genre = genre
    }
    setTime(time) {
        this._time = time
    }
    setColour(colour) {
        this._colour = colour
    }
    setSentiment(sentiment) {
        this._sentiment = sentiment
    }
    setWeather(weather) {
        this._weather = weather
    }
    setBook(book) {
        this._book = book
    }
    get age(){
        return this._age
    }
    get genre(){
        return this._genre
    }
    get time(){
        return this._time
    }
    get colour(){
        return this._colour
    }
    get sentiment(){
        return this._sentiment
    }
    get weather(){
        return this._weather
    }
    get book(){
        return this._book
    }

}