import React from 'react';
import './Input.css'

const Input = ({setMessage, sendMessage, message}) => (
    <form className="form">
        <input type="text" className="input" placeholder="Send a message.."
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        />
        <button className='sendButton' onClick={(event) => sendMessage(event)}>Send</button>
    </form>
)

export default Input