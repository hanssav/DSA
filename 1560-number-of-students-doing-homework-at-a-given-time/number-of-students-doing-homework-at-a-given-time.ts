function busyStudent(startTime: number[], endTime: number[], queryTime: number): number {
    const n = startTime.length;
    let students = 0; 

    for(let i = 0; i < n; i++){
        if(startTime[i] <= queryTime && endTime[i] >= queryTime) students++;
    }

    return students;
};