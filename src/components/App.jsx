import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { createGlobalStyle } from 'styled-components';

import FeedPage from '../pages/FeedPage';
import ViewArticlePage from '../pages/ViewArticlePage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import EditProfilePage from '../pages/EditProfilePage';
import CreateArcticlePage from '../pages/CreateArticlePage';
import EditArticlePage from '../pages/EditArticlePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import Header from './Header';
import { Background } from '../shared/ui';
import { PagePath } from '../consts/pagePath';

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

  * {
    box-sizing: border-box;
  }
`;

const history = createBrowserHistory();

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Background>
        <Router history={history}>
          <Switch>
            <Route exact path="/">
              <Redirect to={PagePath.feed} push />
            </Route>
            <Route exact path={PagePath.feed} component={FeedPage} />
            <Route exact path={PagePath.article.config} component={ViewArticlePage} />
            <Route exact path={PagePath.createArticle} component={CreateArcticlePage} />
            <Route exact path={PagePath.editArticle.config} component={EditArticlePage} />
            <Route exact path={PagePath.userSignIn} component={SignInPage} />
            <Route exact path={PagePath.userSignUp} component={SignUpPage} />
            <Route exact path={PagePath.userEdit} component={EditProfilePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </Background>
    </>
  );
}

export default App;
