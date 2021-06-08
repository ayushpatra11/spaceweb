import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Landing from './pages/Landing';

function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Landing} />
        </Switch>
    </Router>
  );
}

export default App;
