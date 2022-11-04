import React, { Component } from 'react'
import CanvasJSReact from './resources/canvasjs.react'

var CanvasJS = CanvasJSReact.CanvasJS
var CanvasJSChart = CanvasJSReact.CanvasJSChart

class App extends Component {
  state = {
    data: []
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const url =
      //'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'
      'http://127.0.0.1:5000/pie'

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
            data: res
        })
      })
  }

  render() {
    const { data } = this.state

    // console.log(data)

    // const result = data.map((entry, index) => {
    //   return <li key={index}>{entry}</li>
    // })

    // return <ul>{result}</ul>

    return (
      <div>
          <CanvasJSChart options = {data}></CanvasJSChart>
      </div>
  )
  }
}

export default App
