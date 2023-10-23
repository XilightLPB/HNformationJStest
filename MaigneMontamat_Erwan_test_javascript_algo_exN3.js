console.log("Starting last exercice");
console.log(to_check);

function TestAllRows(table){

    for(let row = 0; row<9; row++){
        
        let isGood = TestRow(table[row]);

        if(!isGood){
            console.log(`There was an issue with the row ${row}, values of the problematic row:`);
            console.log(table[row]);
            return false;
        }
        //console.log(`line number: ${row +1} is good`);
    }
    
    return true;
}

TestAllRows(to_check);