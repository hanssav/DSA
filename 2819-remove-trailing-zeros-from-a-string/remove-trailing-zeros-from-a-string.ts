function removeTrailingZeros(num: string): string {
    let arr = num.split("");

    for(let i = arr.length - 1; i >= 0; i--){
        if(num[i] === "0") arr.pop();
        else break;
    };

    return arr.join("");
};