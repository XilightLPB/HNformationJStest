//Full exercise
function TestRow(row){
    let references= [0,0,0,0,0,0,0,0,0];
    res = true;
    for (let cell = 0; cell<9; cell++ ){
        if (typeof row[cell] != 'number' || row[cell] > 9 || row[cell]<1){
            return false;
        }
        else{
            references[row[cell]-1]+=1
        }
    }
    
    for (let cell= 0; cell<9; cell++){
        if (references[cell] != 1){
            
            return false;
        }
    }
    return true;

}

//testing part:
//true
console.log(TestRow([1, 2, 3, 4, 5, 6, 7, 8, 9]));
//false
console.log(TestRow([0, 2, 3, 4, 5, 6, 7, 8, 9]));
//false
console.log(TestRow([2, 2, 3, 4, 5, 6, 7, 8, 9]));