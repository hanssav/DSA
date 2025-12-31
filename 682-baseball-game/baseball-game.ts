function calPoints(operations: string[]): number {
    const arr: number[] = []

    for(let opt of operations){
        const arr_len: number = arr.length; 

        if(opt === "C"){
            arr.pop()
        } else if(opt === "D"){
            arr.push(arr[arr_len - 1] * 2); 
        } else if(opt === "+"){
            const sum = arr[arr_len - 1] + arr[arr_len - 2] 
            arr.push(sum)
        } else {
            arr.push(Number(opt))
        }
    }


    return arr.reduce((acc, curr) => acc + curr, 0)
};  