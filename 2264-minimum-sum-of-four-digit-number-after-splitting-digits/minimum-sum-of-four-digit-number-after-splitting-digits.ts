function minimumSum(num: number): number {
    let numstring = String(num).split("").sort((a, b) => parseInt(a) - parseInt(b)); 

    let num1 = ""; 
    let num2 = "";

    for(let i = 0; i < numstring.length; i++){
        if(i % 2 === 0) num1 += numstring[i];
        else num2 += numstring[i];
    }

    return parseInt(num1) + parseInt(num2);
};