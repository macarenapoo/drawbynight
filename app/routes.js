import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'components/App';
import Home from 'components/pages/Home';
import About from 'components/pages/About';
import Blog from 'components/pages/Blog';
import NoMatch from 'components/pages/NoMatch';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About}></Route>
    <Route path="blog" component={Blog}></Route>
    <Route path="*" component={NoMatch}></Route>
  </Route>
);
