function frequencySort(s: string): string {
    const map = new Map<string, number>()

    for(const str of s){
        map.set(str, (map.get(str) || 0) + 1);
    };

    const sorted = [...map].sort((a, b) => b[1] - a[1]); 

    let res = ""; 

    for(const [key, count] of sorted){  
        for(let i = 1; i <= count; i++){
            res += key;
        }
    }

    return res;
};