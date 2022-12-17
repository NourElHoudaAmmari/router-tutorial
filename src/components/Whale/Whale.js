import React from 'react';
import { BrowserRouter, Route,Router } from "react-router-dom";
import { useMatch } from 'react-router-dom';
import Beluga from './Beluga';
import Blue from './Blue';

export default function Whale() {
  const { path } = useMatch();
  return (
    <>
      <h2>Whale</h2>
      <BrowserRouter>
      <Router>
        <Route path={`${path}/beluga`}>
          <Beluga />
        </Route>
        <Route path={`${path}/blue`}>
          <Blue />
        </Route>
      </Router>
      </BrowserRouter>
    </>
  );
}