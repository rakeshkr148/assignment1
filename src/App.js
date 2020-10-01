import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Category from './Category';
import Products from './Products';

const App = () => {
    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <Route path="/" exact component={Category} />
                        <Route path="/products/:id" exact component={Products} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;