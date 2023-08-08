function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const woodPerChair = 3
    const woodPerTable = 10
    const woodPerBed = 50

    const totalChairWood = woodPerChair * chairQuantity
    const totalTableWood = woodPerTable * tableQuantity
    const totalBedWood = woodPerBed * bedQuantity

    const totalWood = totalBedWood + totalChairWood + totalTableWood
    return totalWood
}

const totalWood = woodCalculator(1, 1, 1)
console.log(totalWood);