import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import MainLayout from 'Layout/Main';

import Index from 'Pages/Index';
import FormComponents from 'Pages/FormComponents';
import NoMatch from 'Pages/NoMatch';

import i18n from '../i18n';

const Routes = () => (
  <I18nextProvider i18n={i18n}>
    <Router>
      <MainLayout>
        <Switch>
          <Route path="/" component={Index} exact />
          <Route path="/form-components" component={FormComponents} />
          <Route component={NoMatch} />
        </Switch>
      </MainLayout>
    </Router>
  </I18nextProvider>
);

export default Routes;
