function minNumberOfHours(initialEnergy: number, initialExperience: number, energy: number[], experience: number[]): number {
    const totalEnergyNeeded = energy.reduce((sum, e) => sum + e, 0);
    const addedEnergy = initialEnergy > totalEnergyNeeded ? 0 : (totalEnergyNeeded - initialEnergy) + 1;

    let addedExperience = 0;
    let currentExp = initialExperience;

    for (const exp of experience) {
        if (currentExp <= exp) {
            const extra = (exp - currentExp) + 1;
            addedExperience += extra;
            currentExp += extra;
        }
        currentExp += exp;
    }

    return addedEnergy + addedExperience;
};