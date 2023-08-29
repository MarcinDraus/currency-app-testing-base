
import ResultBox from './../ResultBox/ResultBox.js';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const objPLNtoUSD = [
  { amount: 100, expected: 'PLN 100.00 = $28.57'},
  { amount: 0, expected: 'PLN 0.00 = $0.00'},
  { amount: -103, expected: 'Wrong value...'},
  { amount: 243, expected: 'PLN 243.00 = $69.43'},
  { amount: 1034050, expected: 'PLN 1,034,050.00 = $295,442.86'},
]
const objUSDtoPLN = [
  { amount: 100, expected: '$100.00 = PLN 350.00'},
  { amount: 0, expected: '$0.00 = PLN 0.00'},
  { amount: -103, expected: 'Wrong value...'},
  { amount: 243, expected: '$243.00 = PLN 850.50'},
  { amount: 1034050, expected: '$1,034,050.00 = PLN 3,619,175.00'},
]

const objEqual = [
  { amount: 100, from: 'PLN', to: 'PLN', expected: 'PLN 100.00 = PLN 100.00'},
  { amount: 100, from: 'USD', to: 'USD', expected: '$100.00 = $100.00'},
  { amount: 0, from: 'PLN', to: 'PLN', expected: 'PLN 0.00 = PLN 0.00'},
  { amount: 0, from: 'USD', to: 'USD', expected: '$0.00 = $0.00'},
  { amount: -103, from: 'PLN', to: 'PLN', expected: 'Wrong value...'},
  { amount: -103, from: 'USD', to: 'USD', expected: 'Wrong value...'},
  { amount: 243, from: 'PLN', to: 'PLN', expected: 'PLN 243.00 = PLN 243.00'},
  { amount: 243, from: 'USD', to: 'USD', expected: '$243.00 = $243.00'},
  { amount: 1034050, from: 'PLN', to: 'PLN', expected: 'PLN 1,034,050.00 = PLN 1,034,050.00'},
  { amount: 1034050, from: 'USD', to: 'USD', expected: '$1,034,050.00 = $1,034,050.00'},
]

describe('Component ResultBox', () => {

  it('should render without crashing', () => {
    render(<ResultBox from="PLN" to="USD" amount={100}  />);
  });

  for (const obj of objPLNtoUSD) {
    it('should render proper info about conversion when PLN -> USD', () => {
      render(<ResultBox from="PLN" to="USD" amount={parseInt(obj.amount)}  />)
  
      const resultBox = screen.getByTestId('resultBox');
  
      expect(resultBox).toHaveTextContent(obj.expected);
    })
  }

  for (const obj of objUSDtoPLN) {
    it('should render proper info about conversion when USD -> PLN', () => {
      render(<ResultBox from="USD" to="PLN" amount={parseInt(obj.amount)}  />)

      const resultBox = screen.getByTestId('resultBox');
  
      expect(resultBox).toHaveTextContent(obj.expected);
    })
  }

  for (const obj of objEqual) {
    it('should render proper info about conversion when PLN -> PLN or USD -> USD', () => {
      render(<ResultBox from={obj.from} to={obj.to} amount={parseInt(obj.amount)}  />)

      const resultBox = screen.getByTestId('resultBox');
  
      expect(resultBox).toHaveTextContent(obj.expected);
    })
  }
    

    cleanup();
 
});