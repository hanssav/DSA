function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
    const all = [...items1, ...items2]; 

    const map = new Map<number, number>(); 

    for(const [val, weight] of all){
        map.set(val, (map.get(val) || 0) + weight);
    }

    return Array.from(map.entries())
        .sort((a, b) => a[0] - b[0])
        .map(([val, weight]) => [val, weight]);
};