import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useState } from 'react'
import './App.css';
import Ready from './components/Ready'
import Set from './components/Set'
import Go from './components/Go'

function App() {

  const [name, setName] = useState('Random Person')
  const [luckyNumber, setLuckyNumber] = useState(3)

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Ready</Link>
              </li>
              <li>
                <Link to="/set">Set</Link>
              </li>
              <li>
                <Link to="/go">Go</Link>
              </li>
            </ul>
          </nav>

          <p>What is your name? </p>
          <input onChange={(event) => setName(event.target.value)} value={name}/>

          <p>What is your lucky number? </p>
          <input onChange={(event) => setLuckyNumber(event.target.value)} value={luckyNumber}/>

          <Switch>
            <Route exact path="/"><Ready name={name} luckyNumber={luckyNumber} /></Route>
            <Route path="/set"><Set name={name} /></Route>
            <Route path="/go"><Go name={name} /></Route>
          </Switch>
        </header>
      </Router>
    </div>
  )
}

export default App;
