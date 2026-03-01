function convertTemperature(celsius: number): number[] {
    const k = celsius + 273.15; 
    const f = celsius * 1.80 + 32.00; 
    return [k, f]
};