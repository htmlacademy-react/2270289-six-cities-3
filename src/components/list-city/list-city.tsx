import { Link } from 'react-router-dom';
import { AppRoute } from '../../const.ts';
import { useAppDispatch, useAppSelector } from '../../hooks/index.ts';
import { citiesList } from '../../const.ts';
import { setCurrentCity } from '../../store/all-offers/all-offers.slice.ts';
import { memo } from 'react';
import { currentCity } from '../../store/all-offers/all-offers.selectors.ts';

function ListCity(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector(currentCity);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            citiesList.map((item) => (
              <li className="locations__item" key={item.name} >
                <Link
                  className={`locations__item-link tabs__item ${item === activeCity && 'tabs__item--active'}`}
                  to={AppRoute.Main}
                  onClick={(evt) => {
                    evt.preventDefault();
                    dispatch(setCurrentCity(item));
                  }}
                >
                  <span>{item.name}</span>
                </Link>
              </li>)
            )
          }
        </ul>
      </section>
    </div>
  );
}

const MemoizedListCity = memo(ListCity);
export default MemoizedListCity;
