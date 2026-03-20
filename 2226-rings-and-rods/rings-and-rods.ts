// function countPoints(rings: string): number {
//     // using map;
//     let count = new Set(); 
//     const counts = new Map();

//     for(let i = 0; i < rings.length; i += 2){
//         const color = rings[i]; 
//         const rod = rings[i + 1];
//         if(count.has(rod)) continue; 

//         if(!counts.has(rod)) counts.set(rod, new Set());
//         counts.get(rod).add(color)

//         if(counts.get(rod).size === 3) count.add(rod);
//     }

//     return count.size;
// };

function countPoints(rings: string): number {
    // using bitmask;
    
    const rods = new Int32Array(10); 

    for(let i = 0; i < rings.length; i+= 2){
        const color = rings[i];
        const idx = parseInt(rings[i + 1]);

        let bit = 0; 
        if(color === "R") bit = 1; 
        else if(color === "G") bit = 2; 
        else if(color === "B") bit = 4; 

        rods[idx] |= bit
    }

    let completeRods = 0; 
    for(let val of rods){
        if(val === 7) completeRods++
    }
    
    return completeRods
};