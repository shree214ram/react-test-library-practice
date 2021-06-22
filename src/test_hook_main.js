import React, { useState } from 'react';

import TestHook from './test_hook'

const TestHookApp = () => {
    const [name, setName] = useState("Moe")
    const changeName = () => {
        setName("Steve")
    }

    return (
        <div className="App">
            <h1> Counter </h1>
            <h1> Basic Hook useState </h1>
            <TestHook name={name} changeName={changeName} />
        </div>
    )
}

export default TestHookApp;