function validMountainArray(arr: number[]): boolean {
    if(arr.length < 3) return false; 

    let incr = arr[0] < arr[1] ? true : false; 

    if(!incr) return false; 

    for(let i = 1; i < arr.length - 1; i++){
        if(arr[i] > arr[i + 1]) incr = false;

        if(incr && arr[i + 1] <= arr[i]) return false; 
        else if(!incr &&arr[i + 1] >= arr[i]) return false;
    }

    return incr ? false : true;
};