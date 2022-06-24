const { getLongestString, getListOfDigitsWithFixedSize, getDigitsFromString, isValidUPC } = require("../src")

test('gets the longest string in list of strings (should be ok)', () => {
    let longest = 'maria'
    let list = ['ana', 'pepe', longest, 'bia']
    expect(getLongestString(list)).toBe(longest)
})

test('gets the longest string in list of strings with quotes (should be ok)', () => {
    let longest = 'maria '
    let list = ['  ana  ', '  pepe   ', longest, '  bia   ']
    expect(getLongestString(list)).toBe(longest.trim())
})

//

test('check upc with fixed size (should be ok)', () => {
    let input = '1038457'
    let formattedInput = '0001038457'
    expect(getListOfDigitsWithFixedSize(input, 10)).toBe(formattedInput)
})

test('check upc with fixed size (should not be ok)', () => {
    let input = 'ACB'
    expect(getListOfDigitsWithFixedSize(input, 10)).toBe(false)
})

test('check upc with fixed size (should be ok)', () => {
    let input = '00'
    let formattedInput = '000000000000'
    expect(getListOfDigitsWithFixedSize(input)).toBe(formattedInput)
})

test('check valid and invalid upcs', () => {
    let validUPC = '70650000026'
    let invalidUPC = 'ABC'
    //
    expect(isValidUPC(validUPC)).toBe(true)
    expect(isValidUPC(invalidUPC)).toBe(false)
})
//

test('get upcs from skus:', () => {
    let sku1 = '893869000539-variant-1'
    let sku2 = '893869000539--variant-1'
    let sku3 = '893869000539-variant-2'
    let sku4 = 'UPC 893869000539'
    //
    expect(getDigitsFromString(sku1)).not.toBe(false)
    expect(getDigitsFromString(sku2)).not.toBe(false)
    expect(getDigitsFromString(sku3)).not.toBe(false)
    expect(getDigitsFromString(sku4)).not.toBe(false)
})