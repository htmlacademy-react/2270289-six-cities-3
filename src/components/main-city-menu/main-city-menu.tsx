import {Link } from 'react-router-dom';
import {AppRoute, directions } from '../../const.ts';
import {setCity } from '../../store/action.ts';
import {useAppDispatch } from '../../hooks/index.ts';

export default function MainCityMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            directions.map((item) => (
              <li className="locations__item" key={item} >
                <Link className="locations__item-link tabs__item" to={AppRoute.Main} onClick={(evt) => {
                  evt.preventDefault();
                  dispatch(setCity(item));
                }}
                >
                  <span>{item}</span>
                </Link>
              </li>)
            )
          }
        </ul>
      </section>
    </div>
  );
}
