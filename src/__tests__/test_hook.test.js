import React from 'react';
import ReactDOM from 'react-dom';
import TestHook from '../test_hook.js';
import { render, fireEvent, cleanup } from '@testing-library/react';
import TestHookApp from '../test_hook_main'

afterEach(cleanup)

it('Text in state is changed when button clicked', () => {
    const { getByText } = render(<TestHook />);

    expect(getByText(/Initial/i).textContent).toBe("Initial State")

    fireEvent.click(getByText("State Change Button"))

    expect(getByText(/Initial/i).textContent).toBe("Initial State Changed")
})


it('button click changes props', () => {
    const { getByText } = render(<TestHookApp>
        <TestHook />
    </TestHookApp>)

    expect(getByText(/Moe/i).textContent).toBe("Moe")

    fireEvent.click(getByText("Change Name"))

    expect(getByText(/Steve/i).textContent).toBe("Steve")
})