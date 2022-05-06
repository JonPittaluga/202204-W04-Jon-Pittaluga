/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { strictEquals } from './strictEquals';

describe('Given the different inputs', () => {
  // true cases
  describe('when receive (1, 1)', () => {
    test('Should return true', () => {
      // Inputs
      const a = 1;
      const b = 1;
      const result = strictEquals(a, b);
      expect(result).toBe(true);
    });
  });
  describe('when receive (0, -0)', () => {
    test('Should return false', () => {
      const a = 0;
      const b = -0;
      const result = strictEquals(a, b);
      expect(result).toBe(true);
    });
  });
  describe('when receive (-0, 0)', () => {
    test('Should return false', () => {
      const a = -0;
      const b = 0;
      const result = strictEquals(a, b);
      expect(result).toBe(true);
    });
  });

  describe('when receive (false, false)', () => {
    test('Should return true', () => {
      const a = false;
      const b = false;
      const result = strictEquals(a, b);
      expect(result).toBe(true);
    });
  });

  describe("when receive ('', '')", () => {
    test('Should return true', () => {
      const a = '';
      const b = '';
      const result = strictEquals(a, b);
      expect(result).toBe(true);
    });
  });

  describe('when receive (NaN, NaN)', () => {
    test('Should return false', () => {
      // Inputs
      const a = NaN;
      const b = NaN;
      const result = strictEquals(a, b);
      expect(result).toBe(false);
    });
  });

  describe("when receive (1, '1')", () => {
    test('Should return false', () => {
      const a = 1;
      const b = '1';
      const result = strictEquals(a, b);
      expect(result).toBe(false);
    });
  });
  describe('when receive (false, true)', () => {
    test('Should return false', () => {
      const a = false;
      const b = true;
      const result = strictEquals(a, b);
      expect(result).toBe(false);
    });
  });

  describe("when receive ('water', 'oil')", () => {
    test('Should return false', () => {
      const a = 'water';
      const b = 'oil';
      const result = strictEquals(a, b);
      expect(result).toBe(false);
    });
  });
});
