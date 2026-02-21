function topKFrequent(words: string[], k: number): string[] {
    const res: string[] = [];
    const counts = new Map<string, number>(); 

    for(const word of words){
        counts.set(word, (counts.get(word) || 0 ) + 1);
    }

    const sorted = [...counts].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])); 

    for(let i = 0; i < k; i++){
        res.push(sorted[i][0]);
    }

    return res;
};