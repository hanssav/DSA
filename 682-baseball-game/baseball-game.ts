function calPoints(operations: string[]): number {
    const arr: number[] = []

    for(let opt of operations){
        const arr_len: number = arr.length; 
        let val: number = 0; 

        if(opt === "C") arr.pop()
        else if(opt === "D") val = arr[arr_len - 1] * 2
        else if(opt === "+") val = arr[arr_len - 1] + arr[arr_len - 2] 
        else val = Number(opt)

        if(val !== 0) arr.push(val)
    }


    return arr.reduce((acc, curr) => acc + curr, 0)
};  