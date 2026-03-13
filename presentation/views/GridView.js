export default class GridView {

    constructor(containerId) {
        this._container = document.getElementById(containerId);
    }

    render(grid) {
        this._container.innerHTML = "";
        this._container.style.display = "grid";
        this._container.style.gridTemplateColumns = `repeat(${grid.width}, 30px)`;
        this._container.style.gap = "2px";

        for (let row = 0; row < grid.cells.length; row++) {
            for (let col = 0; col < grid.cells[row].length; col++) {
                const cell = grid.cells[row][col];

                const cellElement = document.createElement("div");
                cellElement.classList.add("map-cell");
                cellElement.dataset.x = cell.x;
                cellElement.dataset.y = cell.y;

                this._container.appendChild(cellElement);
            }
        }
    }
}