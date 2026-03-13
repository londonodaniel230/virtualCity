export default class Grid {

    constructor (width, height) {
        this._width = width;
        this._height = height;
        this._cells = [];
    }

    // ======= GETTERS =======

    get width () { 
        return this._width; 
    }

    get height () { 
        return this._height; 
    }

    get cells () { 
        return this._cells; 
    }

    // ======= SETTERS =======

    set width (newWidth) { 
        this._width = newWidth; 
    }

    set height (newHeight) { 
        this._height = newHeight; 
    }

    set cells (newCells) { 
        this._cells = newCells; 
    }

    // ======= METHODS =======

    initializeGrid () {

    }

    getCell (x, y) {

    }

    placeBuilding (building, x, y) {

    }

    placeRoad (road, x, y) {

    }

    removeContent (x, y) {

    }
    
}