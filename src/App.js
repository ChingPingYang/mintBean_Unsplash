import React from 'react';
import 'tui-image-editor/dist/tui-image-editor.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Toast from './components/Toast';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/toastui" component={Toast} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
