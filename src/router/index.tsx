import App from 'App';
import DefaultLayout from 'components/layout/DefaultLayout';
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
        element: <LoginPage />
      },
      {
        path: RoutePath.Register,
        element: <RegisterPage />
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
