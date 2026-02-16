function largestInteger(num: number): number {
    let values = Array.from(String(num), (num) => String(num));
    const n = values.length; 

    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
             let valI = values[i]; 
             let valJ = values[j];
            if(
                Number(valI) % 2 === 0 && Number(valJ) % 2 === 0 && valJ > valI ||
                Number(valI) % 2 === 1 && Number(valJ) % 2 === 1 && valJ > valI
            ) {
                [values[i], values[j]] = [values[j], values[i]];
            }
        }
    }

    return Number(values.join(""));
};