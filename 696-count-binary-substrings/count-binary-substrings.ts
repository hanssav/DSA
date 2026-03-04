function countBinarySubstrings(s: string): number {
    const arr = []; 
    let curr = s[0]; 
    let sum = 1; 

    for(let i = 1; i < s.length; i++){
        if(curr === s[i]){
            sum++;
        } else {
            arr.push(sum); 
            curr = s[i];
            sum = 1; 
        }
    }

    arr.push(sum);
    let res = 0; 

    for(let i = 1; i < arr.length; i++){
        res += Math.min(arr[i], arr[i - 1])
    }

    return res;
};