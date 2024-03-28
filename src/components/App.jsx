import { Redirect, Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history"
import { createGlobalStyle } from 'styled-components';

import FeedPage from "../pages/FeedPage";
import ViewArticlePage from "../pages/ViewArticlePage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from '../pages/SignUpPage';
import EditProfilePage from '../pages/EditProfilePage'
import CreateArcticlePage from '../pages/CreateArticlePage'
import EditArticlePage from '../pages/EditArticlePage'
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Header from './Header'
import {Background} from '../shared/ui'

 
const GlobalStyle = createGlobalStyle`
  :root{
    font-family: 'Inter';
  }


  body{
    margin: 0;
    padding: 0;
  }

  #root{
    width: 100vw;
    height: 100vh;
  }
`;

const history = createBrowserHistory();

function App() {

  return (
      <>
        <GlobalStyle/>
        <Header/>
        <Background>
          <Router history={history}>
            <Switch>
              <Route exact path='/' ><Redirect to='/articles/' push/></Route>
              <Route exact path='/articles/' component={FeedPage} />
              <Route exact path='/articles/view/:id/' component={ViewArticlePage}/>
              <Route exact path='/articles/create' component={CreateArcticlePage} />
              <Route exact path='/articles/edit/:id/' component={EditArticlePage}/>
              <Route exact path='/user/signin/' component={SignInPage}/>
              <Route exact path='/user/signup/' component={SignUpPage} />
              <Route exact path='/user/edit/:id' component={EditProfilePage} />
              <Route component={NotFoundPage}/>
            </Switch>
          </Router>
        </Background>
      </>
  )
}

export default App;
