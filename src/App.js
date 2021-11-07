import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from './styles/layout';
import Bookings from './pages/bookings';
import Details from './pages/details';
import Home from './pages/home';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Layout className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details/:id" component={Details} />
          <Route exact path="/bookings" component={Bookings} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
