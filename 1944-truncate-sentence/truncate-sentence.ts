function truncateSentence(s: string, k: number): string {
    // let string = s.split(" ").splice(0, k)
    // console.log(string, 'string')
    // return string.join(" ")

    return s.split(" ").splice(0, k).join(" ")
};