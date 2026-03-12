function countStudents(students: number[], sandwiches: number[]): number {
    const counts = new Map<number, number>();

    for(const s of students){
        counts.set(s, (counts.get(s) || 0) + 1);
    }

    for(const s of sandwiches){
        if(!counts.get(s)) break;

        counts.set(s, counts.get(s) - 1); 

        if(counts.get(s) < 1) counts.delete(s);
    }  

    let count = 0; 

    for(const [_, val] of counts){
        count += val;
    }

    return count;
};