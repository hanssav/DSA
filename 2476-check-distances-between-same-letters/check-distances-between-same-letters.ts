function checkDistances(s: string, distance: number[]): boolean {
    const firstIndex = new Array(26).fill(-1); 

    for(let i = 0; i < s.length; i++){
        const charCode = s.charCodeAt(i) - 97;

        if(firstIndex[charCode] === -1){
            firstIndex[charCode] = i;
        } else {
            const actualDistance = i - firstIndex[charCode] - 1; 
            if(actualDistance !== distance[charCode]) return false;
        }
    }

    return true;
};