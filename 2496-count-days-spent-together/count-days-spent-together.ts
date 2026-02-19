function countDaysTogether(arriveAlice: string, leaveAlice: string, arriveBob: string, leaveBob: string): number {
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; 

    const countDays = (str: string): number => {
        const arr = str.split("-");
        const month = parseInt(arr[0]); 

        let count = parseInt(arr[1]); 

        for(let i = 0; i < month - 1; i++){
            count += months[i];
        };

        return count;
    };

    const start = Math.max(countDays(arriveAlice), countDays(arriveBob));
    const end = Math.min(countDays(leaveAlice), countDays(leaveBob));

    return start > end ? 0 : end - start + 1;
};