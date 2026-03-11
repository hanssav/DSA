function numberOfMatches(n: number): number {
    let totalMathces = 0; 

    while(n > 1){
        if(n % 2 === 0){
            totalMathces += n / 2; 
            n = n / 2;
        } else {
            totalMathces += (n - 1) / 2;
            n = ((n - 1) / 2) + 1
        }
    }

    return totalMathces
};