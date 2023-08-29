


import { render, screen } from '@testing-library/react';
import CurrencyForm from './CurrencyForm.js';
import userEvent from '@testing-library/user-event';
import { cleanup } from '@testing-library/react';

describe('Component CurrencyForm', () => {
  it('should render without crashing', () => {
    render(<CurrencyForm action={() => {}} />);
  });


  const testCases = [
    { amount: '100', from: 'PLN', to: 'USD' },
    { amount: '20', from: 'USD', to: 'PLN' },
    { amount: '200', from: 'PLN', to: 'USD' },
    { amount: '345', from: 'USD', to: 'PLN' },
  ];


  for (const testCase of testCases) {

      it('should run action callback with proper data on form submit', () => {
      const action = jest.fn();

      // render component
      render(<CurrencyForm action={action} />);

      // find “convert” button
      const submitButton = screen.getByText('Convert');

      // find fields element

      const amountField = screen.getByTestId('amount');
      const fromField = screen.getByTestId('from');
      const toField = screen.getByTestId('to');

      // set test values to fields
      userEvent.type(amountField, testCase.amount);
      userEvent.selectOptions(fromField, testCase.from);
      userEvent.selectOptions(toField, testCase.to);

      // simulate user click on "convert" button
      userEvent.click(submitButton);

      // check if action callback was called once and with proper argument
      expect(action).toHaveBeenCalledTimes(1);
      expect(action).toHaveBeenCalledWith({ amount: parseInt(testCase.amount), from: testCase.from, to: testCase.to });

    }) 
    cleanup();
  }
});
