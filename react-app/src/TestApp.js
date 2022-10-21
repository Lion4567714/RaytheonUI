import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
    handleClick = () => {
        import('./TestModule')
        .then(TestModule => {
            <h1>Test Cool</h1>
        })
        .catch(err => {
            <h1>Test</h1>
        });
    };

    render() {
        const characters = [
            {
                name: 'Me',
                occupation: 'None',
            },
            {
                name: 'You',
                occupation: 'A job',
            },
            {
                name: 'Somebody Else',
                occupation: 'An actual job',
            },
        ]

        return (
            <div className="container">
                <Table characterData={characters} />
            </div>
            // <div>
            //     <button onClick={this.handleClick}>Load</button>
            // </div>
        )
    };
}

export default App
