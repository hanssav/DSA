function sortByBits(arr: number[]): number[] {
    const group = new Map<number, number[]>();

    for(let i = 0; i < arr.length; i++){
        const binaryNum = arr[i].toString(2); 
        const bit = countBinary(binaryNum);

        if(!group.has(bit)) group.set(bit, []); 

        group.get(bit)!.push(arr[i]);
    }

    let res: number[] = []

    const sortedKey = [...group.entries()].sort((a, b) => {
        return a[0] - b[0]
    });

    for(const [_, val] of sortedKey){
        const sorted = val.sort((a, b) => a - b);
        res = [...res, ...sorted]
    }

    return res
};

const countBinary = (str: string): number => {
    let count = 0; 
    for(const s of str ){
        if(s === "1") count++;
    }
    return count;
}