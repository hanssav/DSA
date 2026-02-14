function checkPrimeFrequency(nums: number[]): boolean {
    const map = new Map<number, number>(); 

    for(const num of nums){
        map.set(num, (map.get(num) || 0) + 1)
    }

    for(const count of map.values()){
        if(isPrime(count)) return true;
    }

    return false;
};

function isPrime(num: number): boolean{
    if(num <= 1) return false; 
    else if(num === 2) return true;
    else if(num % 2 === 0) return false; 

    const sqrtNum = Math.sqrt(num); 

    for(let i = 3; i <= sqrtNum; i+= 2){
        if(num % i === 0) return false;
    }

    return true;
}