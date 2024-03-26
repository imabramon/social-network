import { Redirect, Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history"
import FeedPage from "../pages/FeedPage";
import ViewArticlePage from "../pages/ViewArticlePage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from '../pages/SignUpPage';
import EditProfilePage from '../pages/EditProfilePage'
import CreateArcticlePage from '../pages/CreateArticlePage'
import EditArticlePage from '../pages/EditArticlePage'
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const history = createBrowserHistory();

function App() {

  return (
      // <FeedPage/>
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
  )
}

export default App;
