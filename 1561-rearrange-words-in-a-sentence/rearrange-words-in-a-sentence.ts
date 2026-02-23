function arrangeWords(text: string): string {
    const words = text.toLowerCase().split(" "); 

    words.sort((a, b) => a.length - b.length); 

    if (words.length > 0) {
        words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    }

    return words.join(" ")
};