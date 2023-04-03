const {
    returnTwo, 
    greeting,
    add
} = require('./functions.js')

test('a test that returns two as 2', () => {
    expect(returnTwo()).toBe(2)
})

test('a test that should ensure greeting returns name paramter properly', () => {
    expect(greeting(`Ethan`)).toBe(`Hello, Ethan.`)
})

test ('test that ensures add returns the sum of num1 and num2', () => {
    expect(add(2,8)).toBe(10)
})