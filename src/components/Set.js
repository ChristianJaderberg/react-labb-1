import React, { useEffect, useState } from 'react'

function Set(props) {

    const [fox, setFox] = useState([])

    useEffect(() => {
        fetchFox()
    }, [])

    function fetchFox() {
        fetch('https://randomfox.ca/floof/')
        .then(response => response.json())
        .then(json => setFox(json))
    }

    return (
        <div>
            <h2>Get set, {props.name}!</h2>
            <button onClick={fetchFox}>Refox yourself!</button>
            <br />
            <img src={fox.image} width='300px'></img>
        </div>
    )
}
  
export default Set