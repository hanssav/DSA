function reversePrefix(s: string, k: number): string {
    let str = s.split("");
    let prefix = str.splice(0, k).reverse(); 

    return [...prefix, ...str].join("");
};