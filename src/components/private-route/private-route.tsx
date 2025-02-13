import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../src/const.ts';

type PrivateRouteProps = {
  authorizationStatus: string;
  children: JSX.Element;
}
function PrivateRoute({authorizationStatus,children } : PrivateRouteProps): JSX.Element {
  return (authorizationStatus === AuthorizationStatus.Auth as string ?
    children :
    <Navigate to={AppRoute.Login} />
  );
}
export default PrivateRoute;
