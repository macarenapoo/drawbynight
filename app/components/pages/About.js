import React from 'react';

class About extends React.Component {
  componentDidmount() {

  }

  render( ) {
    const store = this.context.store;

    return (
      <div>
        <h2>About</h2>
        <div>This is some About Content</div>
      </div>
    )
  }
}

export default About;

About.contextTypes = {
  store: React.PropTypes.object
};
