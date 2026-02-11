function countAsterisks(s: string): number {
    let isInside = false; 
    let count = 0; 

    for(const str of s){
        if(!isInside && str === "*") count++;
    
        if(str === "|") isInside = !isInside
    }

    return count
};