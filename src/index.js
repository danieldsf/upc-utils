let getLongestString = (listOfStrings) => {
    if(typeof listOfStrings != 'object'){
        return false
    }
    listOfStrings = listOfStrings.filter(string => string).map(string => string.trim()).filter(string => string)
    if(!listOfStrings || listOfStrings.length == 0){
        return false
    }
    return listOfStrings.sort(
        function (a, b) {
            return b.length - a.length
        }
    )[0]
}

let getListOfDigitsWithFixedSize = (inputString, size = 12) => {
    let intInput = parseInt(inputString)
    let cleanedString = intInput.toString()
    if(isNaN(intInput)){
        return false
    }
    while(cleanedString.length < size){
        cleanedString = "0"+cleanedString
    }
    return cleanedString
}

let isValidUPC = (inputString) => {
    if(!(typeof inputString == 'string' || typeof inputString == 'number')){
        return false
    }
    inputString = getListOfDigitsWithFixedSize(inputString)
    if(!inputString){
        return false
    }
    let digits = inputString.split('').map(digit => parseInt(digit))
    // TODO: Use this later: let checkDigit = digits.at(-1)
    let sum = 0
    let limit = digits.length
    for (let index = 0; index < limit; index++) {
        if((index+1) % 2 == 0){
            sum += digits[index]
        }else{
            sum += (digits[index] * 3)
        }        
    }

    return sum != 0 && sum % 10 == 0
}

function getDigitsFromString(inputString){
    const regex = /[0-9]+/gmiusd;
    // Alternative syntax using RegExp constructor
    // const regex = new RegExp('[0-9]+', 'gm')
    let m
    let listOfString = []
    while ((m = regex.exec(inputString)) !== null) {
        ///console.log(m)
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        // The result can be accessed through the `m`-variable.
        m.forEach((match) => {
            listOfString.push(match)
        })
    }

    return getLongestString(listOfString)
}

module.exports = {
    getLongestString,
    getListOfDigitsWithFixedSize,
    isValidUPC,
    getDigitsFromString
}