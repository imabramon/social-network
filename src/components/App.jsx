import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import FeedPage from '../pages/FeedPage'
import ViewArticlePage from '../pages/ViewArticlePage'
import SignInPage from '../pages/SignInPage'
import SignUpPage from '../pages/SignUpPage'
import EditProfilePage from '../pages/EditProfilePage'
import CreateArcticlePage from '../pages/CreateArticlePage'
import EditArticlePage from '../pages/EditArticlePage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import Header from './Header'
import { Background } from '../shared/ui'
import { PagePath } from '../consts/pagePath'
import ErrorBoundary from './ErrorBoundary'
import ScrollToTop from '../shared/components/ScrollToTop'

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
`

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Background>
          <ErrorBoundary>
            <Routes>
              <Route exact path="/" element={<Navigate to={PagePath.feed} />} />
              <Route exact path={PagePath.feed} element={<FeedPage />} />
              <Route
                exact
                path={PagePath.article.config}
                element={<ViewArticlePage />}
              />
              <Route
                exact
                path={PagePath.createArticle}
                element={<CreateArcticlePage />}
              />
              <Route
                exact
                path={PagePath.editArticle.config}
                element={<EditArticlePage />}
              />
              <Route
                exact
                path={PagePath.userSignIn}
                element={<SignInPage />}
              />
              <Route
                exact
                path={PagePath.userSignUp}
                element={<SignUpPage />}
              />
              <Route
                exact
                path={PagePath.userEdit}
                element={<EditProfilePage />}
              />
              <Route component={NotFoundPage} />
            </Routes>
          </ErrorBoundary>
        </Background>
      </BrowserRouter>
    </>
  )
}

export default App
