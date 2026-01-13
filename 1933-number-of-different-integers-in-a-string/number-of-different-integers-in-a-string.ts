function numDifferentIntegers(word: string): number {
    const uniq = new Set<string>();

    const blocks = word.split(/\D+/);

    for(let block of blocks){
        if(block.length > 0){
            const cleaned = block.replace(/^0+/, '');

            uniq.add(cleaned === "" ? "0" : cleaned)
            // console.log(block, cleaned, uniq)
        }
    }

    return uniq.size
};