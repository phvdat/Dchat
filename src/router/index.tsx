import App from "App";
import DefaultLayout from "components/layout/DefaultLayout";
import { RoutePath } from "constants/routes";
import LoginPage from "pages/login/Login";
import RegisterPage from "pages/register/Register";
import { Navigate, RouteObject } from "react-router-dom";

const routesConfig: RouteObject[] = [
  {
    path: RoutePath.Index,
    element: <App />,
    errorElement: <div>Not Found 404</div>,
    children: [
      {
        path: RoutePath.Login,
        element: <LoginPage />,
      },
      {
        path: RoutePath.Register,
        element: <RegisterPage />,
      },
      {
        element: <DefaultLayout />,
        children: [
          {
            index: true,
            element: <Navigate to={RoutePath.Home} />,
          },
        ],
      },
    ],
  },
];

export default routesConfig;
