import React, { Component } from 'react';
import Menu from './components/Menu/Menu';

import {Switch,Route,BrowserRouter as Router} from 'react-router-dom';
import routes from './routes'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <React.Fragment>
      <Menu></Menu>
      
      <div className="container">
        
        <div className="row">
        {this.showContentMenus(routes)}
         
        </div>
      </div>
      </React.Fragment>
      </Router>
    );
  }

  showContentMenus = (routes) => {
    
    let result = null;
    if(routes.length >0){
      result = routes.map((route,index) => {
        return(
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          >
          </Route>
        )
      })
    }
    return <Switch>{result}</Switch>
  }
}

export default App;
