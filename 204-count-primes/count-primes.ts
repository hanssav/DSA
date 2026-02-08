function countPrimes(n: number): number {
    function isPrime(val: number): boolean{
        if(val <= 1) return false;
        else if( val === 2) return true;
        else if(val % 2 === 0) return false; 

        const limit = Math.sqrt(val); 

        for(let i = 3; i <= limit; i += 2){
            if(val % i === 0) return false;
        }
        
        return true;
    }

    let count: number = 0;
    for(let i = 1; i < n; i++){
        if(isPrime(i)) count++;
    }

    return count;
};