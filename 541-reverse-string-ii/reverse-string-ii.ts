function reverseStr(s: string, k: number): string {
    let arr = s.split('')
    const len = arr.length;

    for(let i = 0; i < len; i += k * 2){
        let start = i; 
        let end = Math.min(i + k - 1, len - 1); 

        while(end > start){
            [arr[start], arr[end]] = [arr[end], arr[start]]
            start++; 
            end--
        }      
    }

    return arr.join('')
};