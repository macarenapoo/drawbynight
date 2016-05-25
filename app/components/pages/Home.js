import React from 'react';
import Instagram from 'instagram-node-lib';

class Home extends React.Component {
  componentDidMount() {
    const CLIENT_ID	= '76d19746c0c34c998092b779fb95a8f4';
    const CLIENT_SECRET	= '3d9312af709d4f0796e52c3469792db0';
    Instagram.set('client_id', CLIENT_ID);
    Instagram.set('client_secret', CLIENT_SECRET);
    Instagram.tags.info({
      name: 'blue',
      complete: function(data) {
        console.log(data);
      }
    })
  }

  render( ) {
    const store = this.context.store;

    return (
      <div>
        <h2>Home</h2>
        <div>This is some Home Content</div>
      </div>
    )
  }
}

export default Home;

Home.contextTypes = {
  store: React.PropTypes.object
};
