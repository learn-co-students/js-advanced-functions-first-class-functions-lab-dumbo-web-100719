// Code your solution in this file!
const returnFirstTwoDrivers = (array) =>{
    let firstTwoDrivers = [array[0], array[1]]
    return firstTwoDrivers
}

const returnLastTwoDrivers = (array) =>{
    let lastIndex = array.length -1
    let secondLastIndex = array.length -2
    let lastTwoDrivers = [array[secondLastIndex], array[lastIndex]]
    return lastTwoDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (int) =>{
    let fare = int
    return (fare)=>{
        let quintFare = fare * 5
        return quintFare
    }
}

const fareDoubler = (fare) =>{
    let doubleFare = fare * 2
    return doubleFare
}

const fareTripler = (fare) =>{
    let tripleFare = fare * 3
    return tripleFare
}

const selectDifferentDrivers= (arrayOfDrivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(arrayOfDrivers)
}