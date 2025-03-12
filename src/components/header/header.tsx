import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { userAuthorizationStatus, userData } from '../../store/user/user.selectors';
import { favoritesOffers } from '../../store/favorites/favorites.selectors';
import { memo } from 'react';

function Header(): JSX.Element {

  const dispatch = useAppDispatch();
  const user = useAppSelector(userData);
  const isAuth = (useAppSelector(userAuthorizationStatus) === AuthorizationStatus.Auth);

  const offersFavotite = useAppSelector(favoritesOffers);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to='/'>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                    { (isAuth) && (<img src = {user.avatarUrl} />)}
                  </div>
                  <span className="header__user-name user__name">
                    {((isAuth) && user.email)}
                  </span>
                  {((isAuth) && <span className="header__favorite-count">{offersFavotite.length}</span>)}
                </Link>
              </li>
              <li className="header__nav-item">
                <Link className="header__nav-link" to={AppRoute.Login}
                  onClick={
                    (evt) => {
                      if (isAuth) {
                        evt.preventDefault();
                        dispatch(logoutAction());
                      }
                    }
                  }
                >
                  <span className="header__signout">
                    {isAuth ? 'Sign out' : 'Sign in'}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

const MemoizedHeader = memo(Header);
export default MemoizedHeader;
