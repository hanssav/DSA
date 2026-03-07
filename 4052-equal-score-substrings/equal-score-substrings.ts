function scoreBalance(s: string): boolean {
    let sum = 0; 

    for(const str of s){
        const val = str.charCodeAt(0) - 96; 
        sum += val;
    }; 

    let leftSum = 0; 

    for(let i = 0; i < s.length - 1; i++){
        leftSum += s.charCodeAt(i) - 96; 
        let rightSum = sum - leftSum;

        if(leftSum === rightSum) return true;
    }

    return false
};