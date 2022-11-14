import React, { Component, useEffect, useState } from "react"
import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "../../react-ts/src/Login"
import { CreateAccount } from "../../react-ts/src/CreateAccount";

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

    const [currentForm, setCurrentForm] = useState('Login');

    const toggleForm = (forName) => {
      setCurrentForm(forName);
    }
  
    return (
      <div className="App">
        {
          currentForm == "login" ? <Login onFormSwitch={toggleForm}/> : <CreateAccount onFormSwitch={toggleForm} />
        }
  
      </div>
    );

}

export default App