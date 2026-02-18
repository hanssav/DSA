function validateCoupons(code: string[], businessLine: string[], isActive: boolean[]): string[] {
    const validCategories = new Set(["electronics", "grocery", "pharmacy", "restaurant"]);
    const categoryOrder: { [key: string]: number } = {
        "electronics": 0,
        "grocery": 1,
        "pharmacy": 2,
        "restaurant": 3
    };
    
    const validCoupons: { code: string; category: string }[] = [];
    const n = code.length;
    
    for (let i = 0; i < n; i++) {
        if (
            isActive[i] &&
            validCategories.has(businessLine[i]) &&
            code[i].length > 0 &&
            /^[a-zA-Z0-9_]+$/.test(code[i])
        ) {
            validCoupons.push({
                code: code[i],
                category: businessLine[i]
            });
        }
    }
    
    // Sorting dengan pembanding eksplisit
    validCoupons.sort((a, b) => {
        // Urut berdasarkan category
        if (a.category !== b.category) {
            return categoryOrder[a.category] - categoryOrder[b.category];
        }
        
        // Urut berdasarkan code (manual comparison)
        if (a.code < b.code) return -1;
        if (a.code > b.code) return 1;
        return 0;
    });
    
    return validCoupons.map(item => item.code);
}