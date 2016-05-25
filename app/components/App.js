import React from 'react';
import Header from 'components/Header';

class App extends React.Component {
  componentDidmount() {

  }

  render( ) {
    const store = this.context.store;

    return (
      <div>
        <Header />
        { this.props.children }
      </div>
    )
  }
}


export default App;

App.contextTypes = {
  store: React.PropTypes.object
};
