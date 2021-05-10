import React from 'react';
import { autoConvertFromByte } from './unit-convert';

test('should convert to Byte when length is less than 3', ()=> {
  const value = 100;
  expect(autoConvertFromByte(value)).toEqual(`${value} B`);
})

test('should convert to KB when length is between 3 and 6', ()=> {
  const value = 1000;
  const convertedValue = 1;
  expect(autoConvertFromByte(value)).toEqual(`${convertedValue} KB`);
})

test('should convert to MB when length is between 7 and 9', ()=> {
  const value = 1000000;
  const convertedValue = 1;
  expect(autoConvertFromByte(value)).toEqual(`${convertedValue} MB`);
})

test('should round value and convert to MB when length is between 7 and 9', ()=> {
  const value = 1800000;
  const convertedValue = 2;
  expect(autoConvertFromByte(value)).toEqual(`${convertedValue} MB`);
})