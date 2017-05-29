import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import Dashboard from './Dashboard';

// todo: (3) setup react router
const App = () => (
    <Router>
        <div>
            <Route exact path="/" component={Dashboard}/>
        </div>
    </Router>
);

export default App;