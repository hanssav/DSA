function distributeCandies(candies: number, num_people: number): number[] {
    let count = 0; 
    const res = new Array(num_people).fill(0)
    let i = 0; 

    while(candies > 0){
        count++; 

        if(candies > count){
            res[i % num_people] += count;
        } else {
            res[i % num_people] += candies
        }

        candies -= count
        i++
    }

    // console.log(res)
    return res;
};