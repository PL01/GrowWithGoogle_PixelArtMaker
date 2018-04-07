// Select color input - X
// Select size input - X
// Make variables for height(row) & width(column). - X
// Use for loop and inner for loop to make grid. - X

const table = $('#pixelCanvas');//Variable for table
$(document).ready(function(){
    $("#sizePicker").submit(function (e){
        e.preventDefault(); //prevents default setting where the page shows no grid at all.
        const height = $('#inputHeight').val(); //gridHeight
        const width = $('#inputWidth').val(); //gridWith
        makeGrid(height, width);
    });
    $("#fading").fadeIn("slow");
});
//Function will make grid using height and width as arguments
function makeGrid(h, w) {
    table.empty(); //clears table every time a grid is made
    for (let n = 1; n <= h; n++){ //creates row
        const row = $('<tr></tr>');
        table.append(row);
        for (let m = 1; m <= w; m++){ //creates column
            const column = $('<td></td>');
            row.append(column);
        }
    }
};

//Function to add color into a cell
table.on('click', 'td', function(){
    let penColor = $('#colorPicker').val(); //Color variable that has the color picker's values
    $(this).css('background-color', penColor); //sets background color property to penColor's value.
});