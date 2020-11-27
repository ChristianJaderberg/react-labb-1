import React from 'react'

function Ready(props) {
    return (
      <div>
            <h2>Get ready, {props.name}!</h2>
            {props.name.length < 5 && <p>Your name has less than 5 characters!</p>}
            {props.name.length == 5 && <p>Your name has exactly 5 characters!</p>}
            {props.name.length > 5 && <p>Wow, your name has more than 5 characters!!</p>}
      </div>
    )
}
  
export default Ready