import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import GlobalLayout from './Layout';
import NotFound from './notfound';
import Home from './views/Home';
import Contact from './views/Contact';
import Products from './views/Products';
import Company from './views/Company';

const Root = () => (
  <GlobalLayout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/products/:category" component={Products} />
      <Route exact path="/company" component={Company} />
      <Route path="*" component={NotFound} />
    </Switch>
  </GlobalLayout>
);

export default withRouter(Root);
