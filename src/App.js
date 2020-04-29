import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import Channel from './channels/pages/channels';
import Matches from './matches/pages/Matches';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () =>  {
  return <Router>
    <MainNavigation />
    <main>
    <Switch>
    <Route path="/" exact>
      <Matches />
      {/* <Channels /> */}
    </Route>
    <Route path="/:channelId/channel" exact>
      < Channel />
    </Route>
    <Redirect to="/" />
    </Switch>
    </main>
  </Router>
};

export default App;
