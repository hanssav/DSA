function countKeyChanges(s: string): number {
    let count = 0; 
    for(let i = 0; i < s.length - 1; i++){
        if(s[i].toLowerCase() !== s[i + 1].toLowerCase()) count++;
    }; 

    return count;
};