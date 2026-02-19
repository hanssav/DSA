function minLength(s: string): number {
    let arr = s.split("");

    let i = 0; 

    while(i < arr.length){
        const val = `${arr[i]}${arr[i + 1]}`;

        if(val === "AB" || val === "CD"){
            arr.splice(i, 2); 
            if(i > 0) i--;
        } else {
            i++;
        }
    }

    return arr.length;
};