import React from 'react';

class Blog extends React.Component {
  componentDidmount() {

  }

  render( ) {
    const store = this.context.store;

    return (
      <div>
        <h2>Blog</h2>
        <div>This is some Blog Content</div>
      </div>
    )
  }
}

export default Blog;

Blog.contextTypes = {
  store: React.PropTypes.object
};
