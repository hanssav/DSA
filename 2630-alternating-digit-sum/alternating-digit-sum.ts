function alternateDigitSum(n: number): number {
    let arr = n.toString().split("").map(va => Number(va))

    let sum = 0; 
    let p = true; 

    for(const a of arr){
        sum += p ? a : a * -1;
        p = !p; 
    }

    return sum
};