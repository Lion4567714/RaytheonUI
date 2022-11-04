import React, { useState } from 'react';

const PostButton: React.FC = () => {

    const [input, setInput] = useState("");

    function handleClick() {
        fetch('http://127.0.0.1:5000/', {
            method: 'POST', 
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ MyData: "Wow this is some data through a POST request!" })
        })
        .then((response) => {
            console.log(response);
        });
    };

    return (
        <div>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter input..." />
            <button onClick={handleClick} style={{
                textAlign: 'center',
                width: '200px',
                border: '1px solid gray',
                borderRadius: '5px',
            }}>
                Send data to backend
            </button>
        </div>
    );
}

export default PostButton;
