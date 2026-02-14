function countLargestGroup(n: number): number {
    let map = new Map<number, number>();
    let largest = 0; 

    for(let i = 1; i <= n; i++){
        let num = i; 
        let sum = 0; 

        while(num > 0){
            sum += num % 10; 
            num = Math.floor(num / 10);
        }

        map.set(sum, (map.get(sum) || 0) + 1)
        
        largest = Math.max(largest, map.get(sum));
    }

    let res = 0;

    for(const count of map.values()) {
        if(count === largest) res++;
    }
  
    return res;
};