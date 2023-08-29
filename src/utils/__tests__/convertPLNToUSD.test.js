
import { convertPLNToUSD } from './../convertPLNToUSD';

describe('ConvertPLNtoUSD', () => {
    it('should return proper value when good input', () => {
      expect(convertPLNToUSD(1)).toBe('$0.29');
      expect(convertPLNToUSD(2)).toBe('$0.57');
      expect(convertPLNToUSD(20)).toBe('$5.71');
      expect(convertPLNToUSD(12)).toBe('$3.43');
    });
    it('should return NaN when input is text', () => {
      expect(convertPLNToUSD('21')).toBeNaN();
      expect(convertPLNToUSD('abc')).toBeNaN();
      expect(convertPLNToUSD('-101')).toBeNaN();
      expect(convertPLNToUSD('-10ddf3')).toBeNaN();
      expect(convertPLNToUSD('')).toBeNaN();
    })
    it('should return NaN when input is empty', () => {
      expect(convertPLNToUSD()).toBeNaN();
    })
    it('should return error for non string or number', () => {
      expect(convertPLNToUSD({})).toBe('Error');
      expect(convertPLNToUSD([])).toBe('Error');
      expect(convertPLNToUSD(null)).toBe('Error');
      expect(convertPLNToUSD(function() {})).toBe('Error');
    })
    it('should return zero for number less tahn zero', () => {
      expect(convertPLNToUSD(-5)).toBe('$0.00');
      expect(convertPLNToUSD(-45)).toBe('$0.00');
      expect(convertPLNToUSD(-556.5)).toBe('$0.00');
      expect(convertPLNToUSD(-0.4)).toBe('$0.00');
  });
  });

