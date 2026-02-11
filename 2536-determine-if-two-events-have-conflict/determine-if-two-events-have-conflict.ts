function haveConflict(event1: string[], event2: string[]): boolean {
    //f = first, s = second
    const calcTime = (time: string): number => {
        const arr = time.split(":"); 

        return Number(arr[0]) * 60 + Number(arr[1])
    }; 
    
    const e1 = [calcTime(event1[0]), calcTime(event1[1])];
    const e2 = [calcTime(event2[0]), calcTime(event2[1])];

    return e1[0] <= e2[1] && e2[0] <= e1[1]
};