function smallestNumber(num: number): number {
    if(num === 0) return 0;

    const isNegative = num < 0; 

    let digits = Math.abs(num).toString().split("");

    if(isNegative) digits.sort((a, b) => b.localeCompare(a));
    else {
        digits.sort((a, b) => a.localeCompare(b));

        if(digits[0] === "0"){
            for(let i = 0; i < digits.length; i++){
                if(digits[i] !== "0"){
                    [digits[0], digits[i]] = [digits[i], digits[0]];
                    break;
                }
            }
        }
    }

    const results = parseInt(digits.join(""));

    return isNegative ? -results : results;
};