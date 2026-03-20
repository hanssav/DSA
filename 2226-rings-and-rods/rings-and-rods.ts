function countPoints(rings: string): number {
    // using map;
    let count = new Set(); 
    const counts = new Map();

    for(let i = 0; i < rings.length; i += 2){
        const color = rings[i]; 
        const rod = rings[i + 1];
        if(count.has(rod)) continue; 

        if(!counts.has(rod)) counts.set(rod, new Set());
        counts.get(rod).add(color)

        if(counts.get(rod).size === 3) count.add(rod);
    }

    return count.size;
};