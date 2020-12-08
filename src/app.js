import React, { Component } from 'react';
import Counters from './counters';
import Giphyfun from './giphy';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

    render() { 
        return (
            
            <Router>
                <div>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <Link class="navbar-brand" to={'/'}>Grocery List</Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <Link class="nav-link" to={'/giphy'}>Giphy <span class="sr-only">(current)</span></Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    
                    <hr />

                    <Switch>
                        <Route exact path='/' component={Counters} />
                        <Route path='/giphy' component={Giphyfun} />
                    </Switch>
                </div>
            </Router>

            
         );
    }
}
 
export default App;