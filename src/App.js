import React from 'react';
import Main from './comps/main';
import Header from './comps/header';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import RootRed from "./reducer/reducer"
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import SinglePhone from './comps/singlePhone';

const store = createStore(RootRed)

function App() {


    return (
      <div className="App" >
        <Router>
         <Provider store={store}>
        <Header />
        {/* <Main /> */}
        <Switch>
          <Route exact path={`/`} component={Main} />
          <Route exact path={`/phones/:id`} component={Main} />
          <Route exact path={`/smartphone/:id`} component={SinglePhone} />
        </Switch>
        </Provider>
        </Router>
      </div>
    );
  
}

export default App;
