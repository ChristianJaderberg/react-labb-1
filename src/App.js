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

          <label>
            What is your name? 
          <input
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
          </label>

          <label>
            What is your lucky number? 
          <input
            onChange={(event) => setLuckyNumber(event.target.value)}
            value={luckyNumber}
          />
          </label>

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
