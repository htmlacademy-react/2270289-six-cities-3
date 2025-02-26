import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../../src/const.ts';
//import { AuthorizationStatus } from '../../../src/const.ts';

type PrivateRouteProps = {
  //authorizationStatus: string;
  isAuth: boolean;
  children: JSX.Element;
}
function PrivateRoute({ isAuth, children }: PrivateRouteProps): JSX.Element {
  return (isAuth ?
    children :
    <Navigate to={AppRoute.Login} />
  );
}
export default PrivateRoute;
