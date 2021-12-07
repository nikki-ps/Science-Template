/**
 * @jest-environment jsdom
 */
 const math_template = require('./Space_JS.js')

 test('checks for question 1', () => {
     expect(ScienceSpaceJS.checkButton1()).toBe(null)
 });
 
 test('checks for question 2', () => {
     expect(ScienceSpaceJS.checkButton2()).toBe(null)
  });
 