import * as React from 'react'
import {useState} from 'react'

const Question = ({ question, answer }) => {
    const [showAnswer, setShowAnswer] = useState(false)
    const onWindowOpen = () =>{
        window.open("http://localhost:3000/about","_self")
    }
    return (
        <>
            <article>
                <header>
                    <h1 >Testing</h1>
                    <h2 onClick={() => onWindowOpen()} data-testid="question">{question}</h2>
                    <button onClick={() => setShowAnswer(!showAnswer)}>
                        {
                            !showAnswer ? "ABC" : "XYZ"
                        }
                    </button>
                </header>
                {
                    showAnswer && <p data-testid="answer">{answer}</p>
                }
            </article>
        </>
    )
}

export default Question;
