import React, { useEffect, useState } from "react"

function App() {

    const [data, setData] = useState([{}])

    useEffect(() => {
        fetch("http://127.0.0.1:5000/").then(
            result => result.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
                console.log(typeof(data))
                console.log(typeof(data.members))
            }
        )
    }, [])

    return (
        <div>
            {(typeof data.members === 'undefined') ? (
                <p>Loading...</p>
            ) : (
                data.members.map((member, i) => (
                    <p key={i}>{member}</p>
                ))
            )}
        </div>
    )
}

export default App