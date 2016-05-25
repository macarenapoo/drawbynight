require('./shared/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from 'routes';
import { createStore } from 'redux';
import reducer from 'reducer';
import config from '../config'
import Cosmic from 'cosmicjs'

class Provider extends React.Component {
  getChildContext() {
    return {
      store: this.props.store
    }
  };

  render() {
    return this.props.children;
  }
}

Provider.childContextTypes = {
  store: React.PropTypes.object
}

const Routes = React.createClass({
  render () {
    return (
      <Router history={ hashHistory }>
        { routes }
      </Router>
    )
  }
})

export default Routes;

Cosmic.getObjects(config, function(err, response){
  const initialState = response;
  const store = createStore( reducer, initialState );
  const render = () => {
    ReactDOM.render( <Provider store={ store.getState() }><Routes /></Provider> , document.getElementById('app'));
  }
  store.subscribe( render );
  render();
});
