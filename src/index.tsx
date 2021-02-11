import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Component extends React.Component{

    handleClick() {
        console.log('Hello World', this)
    }

    render() {
        return <div>
            <h1>Hello World!</h1>
            <button onClick={this.handleClick.bind(this)}>Hello World!</button>
        </div>
    }
}

ReactDOM.render(<Component/>, document.getElementById('root'))
