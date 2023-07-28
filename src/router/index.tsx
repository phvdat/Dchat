import App from 'App';
import DefaultLayout from 'components/layout/DefaultLayout';
import NonAuthenticated from 'components/layout/NonAuthenticated';
import Chats from 'components/leftContent/chats/Chats';
import Profile from 'components/leftContent/profile/Profile';
import { RoutePath } from 'constants/routes';
import HomePage from 'pages/home/Home';
import LoginPage from 'pages/login/Login';
import RegisterPage from 'pages/register/Register';
import { Navigate, RouteObject } from 'react-router-dom';

const routesConfig: RouteObject[] = [
  {
    path: RoutePath.Index,
    element: <App />,
    errorElement: <div>Not Found 404</div>,
    children: [
      {
        path: RoutePath.Login,
        element: (
          <NonAuthenticated>
            <LoginPage />
          </NonAuthenticated>
        )
      },
      {
        path: RoutePath.Register,
        element: (
          <NonAuthenticated>
            <RegisterPage />
          </NonAuthenticated>
        )
      },
      {
        element: <DefaultLayout />,
        children: [
          {
            element: <HomePage />,
            children: [
              {
                index: true,
                element: <Navigate to={RoutePath.Chat} />
              },
              {
                path: RoutePath.Profile,
                element: <Profile />
              },

              {
                path: RoutePath.Chat,
                element: <Chats />
              }
            ]
          }
        ]
      }
    ]
  }
];

export default routesConfig;
