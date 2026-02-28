function reverseDegree(s: string): number {
    let total = 0; 

    for(let i = 0; i < s.length; i++){
        const charCode = s.charCodeAt(i); 
        const reverseIndex = 123 - charCode; 
        const position = i + 1; 
        total += reverseIndex * position;
    };

    return total
};