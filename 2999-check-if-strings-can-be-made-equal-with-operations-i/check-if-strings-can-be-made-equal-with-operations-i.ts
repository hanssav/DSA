function canBeEqual(s1: string, s2: string): boolean {
   const n = s1.length; 

    let evenS1 = []; 
    let evenS2 = []; 

    let oddS1 = []; 
    let oddS2 = [];

    for(let i = 0; i < n; i++){
        if(i % 2 === 0) {
            evenS1.push(s1[i]); 
            evenS2.push(s2[i]);
        } else {
            oddS1.push(s1[i]); 
            oddS2.push(s2[i]);
        }
    }

    // is even same;
    const isES = evenS1.sort().join("") === evenS2.sort().join("");

    // is odd same; 
    const isOS = oddS1.sort().join("") === oddS2.sort().join("");

    return isES && isOS;
};