import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Container } from 'react-bootstrap';
import VoteList from './VoteList';
import AddVote from './AddVote';
import Navbar from '../components/Navbar';

export default function LinkVoteApp() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/">
            <VoteList />
          </Route>
          <Route path="/add-vote">
            <AddVote />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}
