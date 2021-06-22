import * as React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Question from '../on-click-window-open'


const { open } = window;

beforeAll(() => {
    // Delete the existing
    delete window.open;
    // Replace with the custom value
    window.open = jest.fn();
    
    // Works for `location` too, eg:
    // window.location = { origin: 'http://localhost:3100' };
});

afterAll(() => {
    // Restore original
    window.open = open;
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
    window.open("http://localhost:3000/about","_self");
    
    // assertions
    expect(window.open).toHaveBeenCalled();
    expect(window.open).toBeCalledWith("http://localhost:3000/about","_self");

    // expect(screen.queryByText('Back To Search')).not.toBeInTheDocument() // yeline bad me open kar dena 

});



