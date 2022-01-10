'use strict';

const fooBar = require('../index');

describe ('ccc', () => {
  test('Should foo', () => {
    expect(fooBar.foo(1, 1)).toBe(2);
  });
  
  test('Should bar', () => {
    expect(fooBar.bar(1)).toBe(2);
  });
  
  test('Should foo and bar', () => {
    expect(fooBar.fooBar(42)).toBe(0);
  });
  
  test('aaaaa', () => {
    expect(0).toBe(0);
  });
  
  test('bbbbb', () => {
    expect(1).toBe(1);
  });
});
