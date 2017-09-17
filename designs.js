// Select color input
const colorInput = $('#colorPicker').get(0);
// Select size input
const inputHeight = $('#input_height').get(0);
const inputWidth = $('#input_width').get(0);

function clearGrid() {
  $('#pixel_canvas tbody').remove();
}

function appendTable(table) {
  $('#pixel_canvas').append(table);
}

function addCellsEventListeners() {
  // Set the color when the cell is clicked
  $('td').click(function(e) {
    $(e.target).css('background-color', colorInput.value);
  })
}

function makeGrid() {
  const row = '<tr>{{cells}}</tr>';
  const cell = '<td></td>';
  let table = '<tbody>{{rows}}</tbody>';
  let rows = '';
  // Build the rows
  for (var i = 0; i < Number(inputHeight.value); i++) {
    let cells = '';
    // Build the cells
    for (var j = 0; j < Number(inputWidth.value); j++) {
      cells += cell;
    }
    rows += row.replace('{{cells}}', cells);
  }
  table = table.replace('{{rows}}', rows);
  appendTable(table);
}

// When size is submitted by the user, call makeGrid()
$("form").on('submit', function (e) {
  clearGrid();
  makeGrid();
  addCellsEventListeners();
  // Stop form submission
  e.preventDefault();
});
