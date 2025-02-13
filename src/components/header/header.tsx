import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

export default function Header(): JSX.Element {
  const user = useAppSelector((state) => state.user);
  const isAuth = user.authorizationStatus;
  const countFavoriteOffers = useAppSelector((state) => state.favoriteOffers.length);
  const dispatch = useAppDispatch();

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
                  </div>
                  <span className="header__user-name user__name">
                    {((isAuth === 'AUTH') && user.email)}
                  </span>
                  {((isAuth === 'AUTH') && <span className="header__favorite-count">{countFavoriteOffers}</span>)}
                </Link>
              </li>
              <li className="header__nav-item">
                <Link className="header__nav-link" to={AppRoute.Login}
                  onClick={
                    (evt) => {
                      if (isAuth === 'AUTH') {
                        evt.preventDefault();
                        dispatch(logoutAction());
                      }
                    }
                  }
                >
                  <span className="header__signout">
                    {isAuth === 'AUTH' ?
                      'Sign out' :
                      'Sign in'}
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
