import * as React from 'react'
import { render, screen } from '@testing-library/react'
import sinon from 'sinon';
import userEvent from '@testing-library/user-event'
import Question from '../on-click-window-replace'

const { location } = window;

beforeAll(() => {
    delete window.location;
    window.location = { replace: jest.fn() };
});

afterAll(() => {
    window.location = location;
});

it('mocks `replace`', () => {
    expect(jest.isMockFunction(window.location.replace)).toBe(true);
});



test('it works when clicked at Back to search page', () => {
    render(<Question question="Back To Search" answer="Yes, it is." />);
    const button = screen.getByRole('button')
    const text = screen.getByTestId('question')

    userEvent.click(button)
    expect(screen.getByText('Yes, it is.')).toBeInTheDocument()

    userEvent.click(button)
    expect(screen.queryByText('Yes, it is.')).not.toBeInTheDocument()

    userEvent.click(text)

    // tests
    window.location.replace("about");

    // assertions
    expect(window.location.replace).toHaveBeenCalled();
    expect(window.location.replace).toBeCalledWith("about");

});



