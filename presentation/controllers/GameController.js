import City from "../../model/City.js";
import Grid from "../../model/Grid.js";
import GridView from "../views/GridView.js";

export default class GameController {

    constructor() {
        this._form = document.getElementById("city-form");
        this._setupSection = document.getElementById("setup-section");
        this._cityInfo = document.getElementById("city-info");
        this._mapSection = document.getElementById("map-section");
        this._gridView = new GridView("map-grid");
        this._city = null;
    }

    init() {
        this._form.addEventListener("submit", (event) => {
            event.preventDefault();
            this.createCity();
        });
    }

    createCity() {
        const cityName = document.getElementById("cityName").value.trim();
        const mayorName = document.getElementById("mayorName").value.trim();
        const region = document.getElementById("region").value.trim();
        const size = parseInt(document.getElementById("mapSize").value);

        const grid = new Grid(size, size);
        grid.initializeGrid();

        this._city = new City(
            1,
            cityName,
            mayorName,
            region,
            0,
            0,
            size,
            size,
            grid
        );

        this.showCityInfo();
        this._gridView.render(grid);
        this._mapSection.classList.remove("d-none");
        this._setupSection.classList.add("d-none");
    }

    showCityInfo() {
        this._cityInfo.classList.remove("d-none");
        this._cityInfo.textContent =
            `City: ${this._city.name} | Mayor: ${this._city.mayor} | Region: ${this._city.region} | Size: ${this._city.mapWidth} x ${this._city.mapHeight}`;
    }
}