declare module 'upc-utils' {
    // define the types...
    function getLongestString(listOfStrings: any): any
    
    function getListOfDigitsWithFixedSize(inputString: string, size: number = 12): any
    
    function isValidUPC(inputString: any): boolean
    
    function getDigitsFromString(inputString: string): any
}