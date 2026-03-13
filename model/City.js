export default class City {

    constructor (id, name, mayor, region, latitude, longitude, mapWidth, mapHeight) {
        this._id = id;
        this._name = name;
        this._mayor = mayor;
        this._region = region;
        this._latitude = latitude;
        this._longitude = longitude;
        this._mapWidth = mapWidth;
        this._mapHeight = mapHeight;
        this._currentTurn = 0;
        this._score = 0;
    }

    // ======= GETTERS =======

    get id () {
        return this._id;
    }

    get name () {
        return this._name;
    }

    get mayor () { 
        return this._mayor; 
    }

    get region () { 
        return this._region; 
    }

    get latitude () { 
        return this._latitude; 
    }

    get longitude () { 
        return this._longitude; 
    }

    get mapWidth () { 
        return this._mapWidth; 
    }

    get mapHeight () { 
        return this._mapHeight; 
    }

    get currentTurn () { 
        return this._currentTurn; 
    }

    get score () { 
        return this._score; 
    }

    // ======= SETTERS =======

    set id (newId) {
        this._id = newId;
    }

    set name (newName) {
        this._name = newName
    }

    set mayor (newMayor) {
        this._mayor = newMayor;
    }

    set region (newRegion) {
        this._region = newRegion;
    }

    set latitude (newLatitude) {
        this._latitude = newLatitude;
    }

    set longitude (newLongitude) {
        this._longitude = newLongitude;
    }

    set mapWidth (newWidth) {
        this._mapWidth = newWidth;
    }

    set mapHeight (newHeight) {
        this._mapHeight = newHeight;
    }

    set currentTurn (newTurn) {
        this._currentTurn = newTurn;
    }

    set score (newScore) {
        this._score = newScore;
    }

    // ======= METHODS =======

    startGame () {

    }

    advanceTurn () {

    }

    calculateScore () {

    }
    
}