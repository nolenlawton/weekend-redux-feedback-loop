import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";

import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Admin from '../Admin/Admin';
import Header from '../Header/Header';

// app is pretty straightforwart with routes!
function App() {
  return (
    <Router>
    <div className='App'>
      <Header />

      <Route path="/" exact>
        <Feeling />
      </Route>

      <Route path="/understanding" exact>
        <Understanding />
      </Route>

      <Route path="/support" exact>
        <Support />
      </Route>

      <Route path="/comments" exact>
        <Comments />
      </Route>

      <Route path="/review" exact>
        <Review />
      </Route>

      <Route path="/admin" exact>
        <Admin />
      </Route>
    </div>
    </Router>
  );
}

export default App;
