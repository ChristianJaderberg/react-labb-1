import React from 'react'
import logo from './../logo.svg';

function Ready() {
    return (
      <div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Ready!
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
            Learn React
            </a>
      </div>
    )
}
  
export default Ready