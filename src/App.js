import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useState } from 'react'
import './App.css';
import Ready from './components/Ready'
import Set from './components/Set'
import Go from './components/Go'

function App() {

  const [name, setName] = useState('Random Person')

  return (
    <div className="App">
      <Router>
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
        <header className="App-header">
          <Switch>
            <Route exact path="/"><Ready name={name} /></Route>
            <Route path="/set"><Set name={name} /></Route>
            <Route path="/go"><Go name={name} /></Route>
          </Switch>
        </header>
      </Router>
    </div>
  )
}

export default App;
