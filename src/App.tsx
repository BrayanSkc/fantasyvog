import React, { useEffect, useState } from "react";
import AllPlayers from './route/allPlayers/index';
import Login from "./route/newLogin";
import PlayOne from './route/playOne'
import Start from "./route/start";
import CheckIn from "./route/signUp";
import Entries from "./route/entries";
import Settings from "./route/profile";
import Play from "./route/play";
import PlayContent from "./route/playContent";
import News from "./route/news";
import Friends from "./route/friends";
import Leaders from "./route/leaders";
import { getDataToken } from "./utils/localStorage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteComponentProps,
  Redirect
} from "react-router-dom";
import {
  LOGIN,
  PLAY,
  NEWS,
  CHECK_IN,
  ENTRIES,
  PROFILE,
  HOME,
  FRIENDS,
  LEADER,
  START,
  PLAY_PUBLIC,
  ALL_PLAYERS,
  PLAY_ONE
} from "./routes";
import Header from "../src/components/header";
import Loading from "./components/loading";

const AppContent: React.SFC<RouteComponentProps> = ({ history }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function isAuthenticate() {
      const token = await getDataToken();
      if (!token) {
        history.push(HOME);
      }
    })();

    const timeLoading = setTimeout(function() {
      setLoading(false);
      clearTimeout(timeLoading);
    }, 1000);
  }, []);

  return (
    <>
      <Switch>
        <Route exact path={HOME} component={Login}></Route>
        <Route exact path={PLAY} component={Play}></Route>
        <Route exact path={NEWS} component={News}></Route>
        <Route exact path={ENTRIES} component={Entries}></Route>
        <Route exact path={PROFILE} component={Settings}></Route>
        <Route exact path={FRIENDS} component={Friends}></Route>
        <Route exact path={LEADER} component={Leaders}></Route>
        <Route exact path={START} component={Start}></Route>
        <Route exact path={PLAY_PUBLIC} component={PlayContent}></Route>
        <Route exact path={PLAY_ONE} component={PlayOne}></Route>
        <Route exact path={ALL_PLAYERS} component={AllPlayers}></Route>
        <Route render={() => <Redirect to={PLAY} />}></Route>
      </Switch>
      {loading && <Loading />}
    </>
  );
};

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <div className="app-principal-content">
          <Switch>
            <Route exact path={LOGIN} component={Login}></Route>
            <Route exact path={CHECK_IN} component={CheckIn}></Route>
            <Route component={AppContent}></Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};
export default App;
