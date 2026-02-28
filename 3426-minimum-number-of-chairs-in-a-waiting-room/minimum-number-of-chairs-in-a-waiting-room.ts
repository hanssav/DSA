function minimumChairs(s: string): number {
    let current = 0;
    let maxChairs = 0;

    for(const str of s){
        if(str === "E"){
            current++;
            maxChairs = Math.max(maxChairs, current);
        } else { // str === "L"
            current--;
        }
    }

    return maxChairs;
};