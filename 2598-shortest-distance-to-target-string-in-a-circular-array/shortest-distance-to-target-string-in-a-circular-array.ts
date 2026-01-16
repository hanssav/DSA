function closestTarget(words: string[], target: string, startIndex: number): number {
    let minDistance = Infinity;
    
    for (let i = 0; i < words.length; i++) {
        if (words[i] === target) {
            // Jarak searah jarum jam (forward)
            const forwardDist = Math.abs(i - startIndex);
            
            // Jarak berlawanan arah (backward/circular)
            const backwardDist = words.length - forwardDist;
            
            // Ambil jarak minimum dari kedua arah
            const currentDist = Math.min(forwardDist, backwardDist);
            
            minDistance = Math.min(minDistance, currentDist);
        }
    }
    
    return minDistance === Infinity ? -1 : minDistance;
}