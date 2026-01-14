function checkZeroOnes(s: string): boolean {
    let zero = 0; 
    let ones = 0; 
    let res = [0, 0]

    let is_zero = false;
    for(let i = 0; i < s.length; i++){
        if(Number(s[i]) === 1){
            ones++;
            zero = 0; 
            is_zero = false;

            if(ones > res[1]) res[1] = ones
        } else {
            zero++; 
            ones = 0; 
            is_zero = true;

            if(zero > res[0]) res[0] = zero

        }
    }

    return res[1] > res[0]
};