console.log("Starting last exercice");
console.log(to_check);

//Question 1
function TestAllRows(table){

    for(let row = 0; row<9; row++){
        let isGood = TestRow(table[row]);
        if(!isGood)
        {
            console.log(`There was an issue with the row ${row}, values of the problematic row:`);
            console.log(table[row]);
            return false;
        }
        //console.log(`line number: ${row +1} is good`);
    }
    return true;
}

//Question 2
function TestAllCol(table){
    let cols = [];
    for (let i = 0; i<9; i++)
    {
        cols.push([]);
    }
    for (let row = 0; row<9; row++){
        for (let col = 0; col<9; col++){
            cols[col].push(table[row][col]);
        }
    }
    console.log("array when we switched ligns and columns")
    console.log(cols);
    res = TestAllRows(cols);
    return res;
}


//Question 3
function TestAllRegion(table){
    let region =[];
    for (let i = 0; i<9; i++)
    {
        region.push([]);
    }
    for (let row = 0; row<9; row++)
    {
        
        for (let col = 0; col<9; col++){
            if (row <3){
                if (col<3){
                    region[0].push(table[row][col]);
                }
                if (col>2 && col<6){
                    region[1].push(table[row][col]);
                }
                if (col>5 && col<9){
                    region[2].push(table[row][col]);
                }
            }
            if (row <6 && row>2){
                if (col<3){
                    region[3].push(table[row][col]);
                }
                if (col>2 && col<6){
                    region[4].push(table[row][col]);
                }
                if (col>5 && col<9){
                    region[5].push(table[row][col]);
                }
            }
            if (row <9 && row>5){
                if (col<3){
                    region[6].push(table[row][col]);
                }
                if (col>2 && col<6){
                    region[7].push(table[row][col]);
                }
                if (col>5 && col<9){
                    region[8].push(table[row][col]);
                }
            }
        }
    }
    console.log("arrays by region");
    console.log(region);
}




//if you want everything in one function there it is, Question 4
function TestTheGrid(table)
{
    let region =[];
    let cols = [];
    for (let i = 0; i<9; i++)
    {
        cols.push([]);
    }
    for (let i = 0; i<9; i++)
    {
        region.push([]);
    }

    //setting up the arrays:
    //and yeah that's messy but it allows us to not iterate 3 times over the data for nothing, it is basically the 3 treatement in one same function
    for (let row = 0; row<9; row++)
    {

        for (let col = 0; col<9; col++){
            cols[col].push(table[row][col]);
            if (row <3){
                if (col<3){
                    region[0].push(table[row][col]);
                }
                if (col>2 && col<6){
                    region[1].push(table[row][col]);
                }
                if (col>5 && col<9){
                    region[2].push(table[row][col]);
                }

            }
            if (row <6 && row>2){
                if (col<3){
                    region[3].push(table[row][col]);
                }
                if (col>2 && col<6){
                    region[4].push(table[row][col]);
                }
                if (col>5 && col<9){
                    region[5].push(table[row][col]);
                }

            }
            if (row <9 && row>5){
                if (col<3){
                    region[6].push(table[row][col]);
                }
                if (col>2 && col<6){
                    region[7].push(table[row][col]);
                }
                if (col>5 && col<9){
                    region[8].push(table[row][col]);
                }

            }
        }
    }
    console.log("original array");
    console.log(table);
    console.log("arrays by region");
    console.log(region);
    console.log("array when we switched ligns and columns")
    console.log(cols);

    //the array that will store every issues
    let issues = [];
    
    for (let row = 0; row<9; row++){
        let isGood = TestRow(table[row]);

        //creating an issue containing at the first index the error message, and then each element of the problematic row
        if(!isGood){
            console.log(`There was an issue with the row ${row}, values of the problematic row:`);
            console.log(table[row]);
            let issue =[];
            for (let j = 0; j<10; j++){
                if (j==0){
                    issue.push(`There was an issue with the row ${row}, values of the problematic row:`);
                }
                else{
                    issue.push(table[row][j-1]);
                }
            }
            issues.push(issue);
            
        }
    }


    //testing col
    for (let i = 0; i<9; i++){
        let isGood = TestRow(cols[i]);

        //creating an issue containing at the first index the error message, and then each element of the problematic row
        if(!isGood){
            console.log(`There was an issue with the col ${i}, values of the problematic col:`);
            console.log(cols[i]);
            let issue =[];
            for (let j = 0; j<10; j++){
                if (j==0){
                    issue.push(`There was an issue with the col ${i}, values of the problematic col:`);
                }
                else{
                    issue.push(cols[i][j-1]);
                }
            }
            issues.push(issue);
            
        }
    }

    //testing region
    for (let i = 0; i<9; i++){
        let isGood = TestRow(region[i]);

        //creating an issue containing at the first index the error message, and then each element of the problematic row
        if(!isGood){
            console.log(`There was an issue with the region ${i}, values of the problematic region:`);
            console.log(region[i]);
            let issue =[];
            for (let j = 0; j<10; j++){
                if (j==0){
                    issue.push(`There was an issue with the region ${i}, values of the problematic region:`);
                }
                else{
                    issue.push(region[i][j-1]);
                }
            }
            issues.push(issue);
            
        }
    }

    if (issues.length == 0){
        return true;
    }
    else{
        return issues;
    }
}


//question 5
function DisplayIssues(table){
    let toworkwith = TestTheGrid(table);

    if (typeof toworkwith === true){
        var result = document.getElementById('Answers');
        result.innerHTML = "The table is correct";
        console.log("the results are corrects");
    }
    else{
        console.log("the results are wrong");
        LogTheGrid(toworkwith);
        let tableau = document.getElementById("Issues");
        for (let row = 0; row< toworkwith.length; row++){

            tableau.insertRow();

            for (let col = 0; col<10; col++){
                let Cell = tableau.rows[tableau.rows.length - 1].insertCell();
                Cell.textContent = toworkwith[row][col];
            }
        }
    }
}

DisplayIssues(to_check);
