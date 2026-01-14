function sortPeople(names: string[], heights: number[]): string[] {
    const n = names.length; 

    for(let i = 0; i < n; i++){
        let max = i;
        for(let j = i + 1; j < n; j++){
            if(heights[j] > heights[max]) max = j
        }

        // console.log(heights[max], '[heights[max]', heights[i])
        if(max !== i) {
            [heights[i], heights[max]] = [heights[max], heights[i]];
            [names[i], names[max]] = [names[max], names[i]];
        }
    }

    return names
};