import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import GlobalLayout from './Layout';
import NotFound from './notfound';
import Home from './views/Home';
import Contact from './views/Contact';
import Products from './views/Products';

const Root = () => (
  <GlobalLayout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/products" component={Products} />
      <Route path="*" component={NotFound} />
    </Switch>
  </GlobalLayout>
);

export default withRouter(Root);
