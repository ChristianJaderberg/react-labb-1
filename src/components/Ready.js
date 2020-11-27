import React from 'react'

function Ready(props) {
    return (
      <div>
            <h2>Get ready, {props.name}!</h2>
            {props.name.length < 5 && <p>Your name has less than 5 characters!</p>}
            {props.name.length === 5 && <p>Your name has exactly 5 characters!</p>}
            {props.name.length > 5 && <p>Wow, your name has more than 5 characters!!</p>}

            {props.luckyNumber > 10 ? <p>Your lucky number is way off! Good luck with that...</p> : <p>Well ok, your lucky number is pretty cliche if you ask me.</p>}
      </div>
    )
}
  
export default Ready