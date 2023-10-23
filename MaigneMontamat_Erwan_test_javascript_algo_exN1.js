//This function may just be used to test that the grid is working. 
function LogTheGrid(grid) {
  for (let i = 0; i < grid.length; i++) {
    console.log(grid[i]);
  }
}



//Question 1: Init a 9x9 grid with only 0
function initGrid(){
  console.log("Initializing the grid");
  let res = [];
  for (let i = 0; i<9; i++){
    let row = [];
    for(let j= 0; j<9; j++){
      row.push(-1);
    }
    res.push(row);
  }
  return res;
}


//Question 2
function From1Dto2D(toReceive,toTransfer){
  for (let i =0; i<81; i++){
    let x = i%9;
    let y = (i-x)/9;
    toReceive[y][x] = toTransfer[i];

  }
  console.log("Logging results");
  console.log(toTransfer);
  console.log(toReceive);
}


//Question 3 first try (I failed to replace the table by another)
function LetsCalcDisplay(TwoDimArray){
  let table = document.createElement('table');
  for (let row = 0; row<9; row++){
    table.insertRow();
    for (let col = 0; col<9; col++){
      let Cell = table.rows[table.rows.length - 1].insertCell();
      Cell.textContent = TwoDimArray[row][col];
    }
  }
  return table;
}


//Question 3
function LetsDisplayIt(TwoDimArray, id){
  let table = document.getElementById(id);
  for (let row = 0; row<9; row++){
    table.insertRow();
    for (let col = 0; col<9; col++){
      let Cell = table.rows[table.rows.length - 1].insertCell();
      Cell.textContent = TwoDimArray[row][col];
    }
  }
  return table;
}






//Answers here:
//Question 1:
let to_verify = initGrid();

//Question 2:
let to_check = initGrid();

let array_to_test= 
[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 
  1, 2, 3, 4, 5, 6, 7, 8, 9, 
  1, 2, 3, 4, 5, 6, 7, 8, 9, 
  1, 2, 3, 4, 5, 6, 7, 8, 9, 
  1, 2, 3, 4, 5, 6, 7, 8, 9, 
  1, 2, 3, 4, 5, 6, 7, 8, 9, 
  1, 2, 3, 4, 5, 6, 7, 8, 9, 
  1, 2, 3, 4, 5, 6, 7, 8, 9, 
  1, 2, 3, 4, 5, 6, 7, 8, 9];



From1Dto2D(to_check, array_to_test);


//Question 3:

to
let TestDisplay = to_check;
let table = LetsCalcDisplay(to_check);
console.log(table);

//Question 4:
LetsDisplayIt(to_check, 'tableHTML');

//Testing module, just clear if I forgot to do it;