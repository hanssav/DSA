function distanceBetweenBusStops(distance: number[], start: number, destination: number): number {
    // 1. Pastikan s selalu yang lebih kecil, d selalu yang lebih besar
    let s = Math.min(start, destination);
    let d = Math.max(start, destination);
    
    let move1 = 0;
    const total = distance.reduce((acc, curr) => acc + curr, 0);

    // 2. Hitung jarak searah (clockwise) dari s ke d
    // Gunakan < d, bukan <= d
    for (let i = s; i < d; i++) {
        move1 += distance[i];
    }

    // 3. Jarak berlawanan (counter-clockwise) adalah sisanya
    let move2 = total - move1; 

    return Math.min(move1, move2);
}