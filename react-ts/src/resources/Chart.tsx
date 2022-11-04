import React, { useState, useEffect } from 'react';
import CanvasJSReact from './canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart: React.FC = () => {
    
    // data = variable name
    // setData = data's "setter"
    // useState() = data's default type (this gets overwritten, so null is fine for now)
    const [data, setData] = useState(null);

    // useEffect() is called every time this function is updated
    useEffect(() => {
        fetch("http://127.0.0.1:5000/pie").then(
            result => result.json()
        ).then(
            data => {
                console.log(data);
                setData(data);
            }
        );
    }, []); 
    // The ', []' above tells useEffect() to only work once: when the website is first loaded.
    // To make it run more than once, we need to put a callback or variable in the brackets.
    // Whenever our callback or variable changes, useEffect() will be called.

    return (
        <div>
            <CanvasJSChart options={data}/>
        </div>
    );
};

export default Chart;
