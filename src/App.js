import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Ready from './components/Ready'
import Set from './components/Set'
import Go from './components/Go'

function App() {
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
        <header className="App-header">
          <Switch>
            <Route exact path="/"><Ready /></Route>
            <Route path="/set"><Set /></Route>
            <Route path="/go"><Go /></Route>
          </Switch>
        </header>
      </Router>
    </div>
  )
}

export default App;
