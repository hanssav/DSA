function removeDigit(number: string, digit: string): string {
    let curr = "";

    for(let i = 0; i < number.length; i++){
        if(number[i] === digit){
            const val = number.slice(0, i) + number.slice(i + 1); 

            if(curr === "" || val > curr) curr = val;
        }
    }

    return curr;
};