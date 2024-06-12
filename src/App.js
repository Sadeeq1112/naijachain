import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/product/:id">
          {/* Product Details Component */}
        </Route>
        <Route path="/">
          {/* Product Listing Component */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;