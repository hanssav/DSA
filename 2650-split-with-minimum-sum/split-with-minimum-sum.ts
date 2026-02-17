function splitNum(num: number): number {
    const str = num.toString().split("");
    str.sort((a, b) => Number(a) - Number(b)); 

    let sum1 = ""; 
    let sum2 = "";

    for(let i = 0; i < str.length; i++){
        if(i % 2 === 0) sum1 += str[i]
        else sum2 += str[i]
    }

    return parseInt(sum1) + parseInt(sum2);
};