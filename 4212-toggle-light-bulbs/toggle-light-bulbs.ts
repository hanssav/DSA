function toggleLightBulbs(bulbs: number[]): number[] {
    const datas = new Set<number>();

    for(const bulb of bulbs){
        if(datas.has(bulb)) datas.delete(bulb)
        else datas.add(bulb)
    }

    return Array.from(datas).sort((a, b) => a - b)
};