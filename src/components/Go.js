import React, { useEffect, useState } from 'react'

function Go(props) {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetchItems()
    }, [])

    function fetchItems() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setItems(json))
    }

    return (
        <div>
            <h2>And go, {props.name}!</h2>
            <div>
                {items.map(item =>
                    <div>
                        <p>{item.name + ' (aka: ' + item.username + ')'}</p>
                        <p>{item.address.city}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
  
export default Go