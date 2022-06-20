// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected;

// Add a row
function addR() {
    numRows += 1;
    let row = document.createElement("tr");
    row.classList.add("new_row");

    if (numCols === 0) {
        numCols++;
    }
    for (let i = 0; i < numCols; i++) {
        let cell = document.createElement("td");
        cell.classList.add("new_cell");
        cell.onclick = () => colorCell(cell);
        row.appendChild(cell);
    }
    document.querySelector("grid").appendChild(row);
}

// Add a column
function addC() {
    numCols++;

    if (numRows == 0) {
        numRows++;
        let row = document.createElement("tr");
        row.classList.add("new_row");
        document.querySelector("grid").appendChild(row);
    }

    for (let i = 0; i < numRows; i++) {
        let col = document.querySelectorAll("tr")[i].insertCell();
        col.classList.add("new_cell");
        col.onclick = () => colorCell(col); // allows cell to be colored when clicked
    }
}

// Remove a row
function removeR() {
    if(numRows === 0 || numRows < 0){
        numCols = 0;
    } 
    if(numRows > 0){
        numRows--;
        let row = document.getElementsByClassName("new_row")[numRows];
        row.parentNode.removeChild(row);
    } 
}

// Remove a column
function removeC() {
    if (numCols > 0) {
        for (let i = 0; i < numRows; i++) {
            grid.rows[i].deleteCell(numCols - 1);
        }
        numCols--;
    }

    if(numCols === 0 || numCols < 0){
        numRows = 0;
    }
}

//Set global variable for selected color ¡
function selectColor() {
    colorSelected = document.querySelector("selectedColorId").value;
}

// Fill all uncolored cells
function fillU() {
    let cells = document.querySelectorAll("td");

    for (let i = 0; i < numRows * numCols; i++) {
        if(cells[i].style.backgroundColor === "  "){
            cells[i].style.backgroundColor = colorSelected;
        }
    }
}

// Fill all cells
function fillAll() {
    let col = document.querySelectorAll("td");

    for (let i = 0; i < numRows * numCols; i++) {
        col[i].style.backgroundColor = colorSelected;
    }
}

// Clear all cells
function clearAll() {
    let row = document.getElementsByTagName("tr");

    for(const roworder of row){
        let col = roworder.getElementsByTagName("td");
        for(let i=0; i<numCols; i++){
            col[i].style.background = "  ";
        }
    }
}

// Color the cell to the selected color
function colorCell(cell) {
    cell.style.backgroundColor = colorSelected;
}