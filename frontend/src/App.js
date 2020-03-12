import React, { lazy, Suspense, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { THEME_MODE } from './constants';
import AppContext from './state';

const SignUpPage = lazy(() => import( './pages/SignUpPage.js' ));
const SignInPage = lazy(() => import( './pages/SignInPage.js' ));
const HomePage = lazy(() => import( './pages/HomePage.js' ));

const fallbackElem = <div className='loader'>Loading...</div>;

export const ThemeContext = React.createContext('dark');

class App extends Component {

  state = {
    theme: THEME_MODE.LIGHT
  };

  render () {

    const contextValue = {
      state: this.state,
      setState: this.setState.bind(this)
    };

    return (
      <AppContext.Provider value={contextValue}>
        <Router>
          <Suspense fallback={fallbackElem}>
            <Switch>
              <Route exact path="/"
                     component={HomePage}/>
              <Route path={['/signup', '/sign_up']}
                     component={SignUpPage}/>
              <Route path={['/signin', '/sign_in', '/login']}
                     component={SignInPage}/>
            </Switch>
          </Suspense>
        </Router>
      </AppContext.Provider>
    );
  }
}

export default App;