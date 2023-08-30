
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import  CurrencyForm  from './CurrencyForm.js';
import userEvent from '@testing-library/user-event';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';


describe('Component CurrencyForm', () => {
	it('should render without crashing', () => {
		render(<CurrencyForm action={() => {}} />);
	});

	it('should run action callback with proper data on form submit', () => {
		const testCases = [
			{ amount: '100', from: 'PLN', to: 'USD' },
			{ amount: '20', from: 'USD', to: 'PLN' },
			{ amount: '200', from: 'PLN', to: 'USD' },
			{ amount: '345', from: 'USD', to: 'PLN' },
		];
		for (const testObject of testCases) {
			const action = jest.fn();

			// render component
			render(<CurrencyForm action={action} />);

			// find “convert” button
			const submitButton = screen.getByText('Convert');

			// check if action callback was called once
			const amountInput = screen.getByTestId('amount');
			const fromField = screen.getByTestId('from');
			const toField = screen.getByTestId('to');

			// set test values to fields
			userEvent.type(amountInput, testObject.amount);
			userEvent.selectOptions(fromField, testObject.from);
			userEvent.selectOptions(toField, testObject.to);

			// simulate user click on "convert" button
			userEvent.click(submitButton);

			expect(action).toHaveBeenCalledTimes(1);
			expect(action).toHaveBeenCalledWith({
				amount: parseInt(testObject.amount),
				from: testObject.from,
				to: testObject.to,
			});
			cleanup();
		}
	});
});

