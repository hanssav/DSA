function reconstructQueue(people: number[][]): number[][] {
    people.sort((a, b) => {
        if(b[0] !== a[0]){
            return b[0] - a[0]
        }

        return a[1] - b[1]
    }); 

    const res = []; 

    for(const person of people){
        const k = person[1];
        
        // res.splice(startIndex, deleteCount, item1, item2, ...)
        res.splice(k, 0, person)
    }
    return res;
};