
import React, { useState } from "react";
export const Login = (props: { onFormSwitch: (arg0: string) => void; }) => {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(username);

    }



    return (
        <div className="auth-form-container">
             <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="Username">Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)}type="Username" placeholder="Username" id="username" name="username"/>
                <label htmlFor="Password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)}type="Password" placeholder="*********" id="password" name="password"/>
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('create account')}>Dont have an account? Create Here. </button>
        
        
        </div>
       
    )
}
