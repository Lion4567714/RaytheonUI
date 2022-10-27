import React, { Component } from 'react'
import CanvasJSReact from './resources/canvasjs.react'

var CanvasJS = CanvasJSReact.CanvasJS
var CanvasJSChart = CanvasJSReact.CanvasJSChart

class Chart extends Component {
    render() {
        const options = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "dark2",
            title: {
                text: "Title"
            },
            data: [{
                type: "pie",
                indexLabel: "{label}: {y}%",
                startAngle: -90,
                dataPoints: [
                    { y: 20, label: "Label 1"},
                    { y: 80, label: "Label 2"}
                ]
            }]
        }

        return (
            <div>
                <CanvasJSChart options = {options}></CanvasJSChart>
            </div>
        )
    }
}

export default Chart
