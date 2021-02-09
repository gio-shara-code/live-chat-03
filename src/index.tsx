import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Component extends React.Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('Hello World')
    }

    render() {
        return (
            <>
                <h1>Hello World!</h1>
                <button onClick={()=> console.log('Hello')}>Hello World!</button>
            </>        
        )
    }
}


ReactDOM.render(<Component/> , document.getElementById('root'))