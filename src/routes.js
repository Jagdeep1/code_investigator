import App from './components/App';
import Landing from './components/Landing';
import SignupContainer from './containers/SignupContainer';
import LoginContainer from './containers/LoginContainer';
import DashboardContainer from './containers/DashboardContainer';
import NotFound from './components/NotFound';
import Charts from './components/Charts';
import CodeUpload from './containers/CodeUpload';
import TestContainer from './containers/TestContainer';

export function requireAuth(store) {
  return (nextState, replace) => {

    const state = store.getState();

    if(!state.auth.isLoggedIn) {
      replace({
        pathname: '/login',
        query: {
          next: nextState.location.pathname
        }
      });
    }

  };
}

const createRoutes = (store) => {

  const routes = [
    {
      path: '/',
      component: App,
      indexRoute: {
        component: Landing
      },
      childRoutes: [
        {
          path: 'dashboard',
          component: DashboardContainer
          //onEnter: requireAuth(store)
        },
        {
          path: 'signup',
          component: SignupContainer
        },
        {
          path: 'landing',
          component: Landing
        },
        {
          path: 'login',
          component: LoginContainer
        },
        {
          path: 'charts',
          component: Charts
        },
        {
          path: 'codeupload',
          component: CodeUpload
        },
        {
          path: 'testcomponent',
          component: TestContainer
        },
        {
          path: '*',
          component: NotFound
        }
      ]
    }
  ];

  return routes;
}

export default createRoutes;
