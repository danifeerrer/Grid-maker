<h1> Grid Maker </h1>
This code provides functions to manipulate a grid-like structure in a web page. It allows users to add or remove rows and columns, select a color, and fill or clear cells with the selected color.

<h2> Getting Started </h2>
 To use this code, include it in your HTML file and ensure that the necessary elements and styles are defined.
 
<h3> Global Variables </h3>
numRows: Represents the current number of rows in the grid.
numCols: Represents the current number of columns in the grid.
colorSelected: Represents the currently selected color.

<h3> Functionality </h3> 
addR(): Adds a row to the grid. Clicking on a cell in the new row will color it with the selected color.
addC(): Adds a column to the grid. Clicking on a cell in the new column will color it with the selected color.
removeR(): Removes the last row from the grid.
removeC(): Removes the last column from the grid.
selectColor(): Sets the global colorSelected variable to the value selected from the color dropdown.
fillU(): Fills all uncolored cells in the grid with the selected color.
fillAll(): Fills all cells in the grid with the selected color.
clearAll(): Clears the color of all cells in the grid.
colorCell(cell): Colors the clicked cell with the selected color.
Feel free to customize the HTML structure, CSS styles, and functionality according to your needs.
