import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
//import {setCity} from '../../store/action.ts';
import {useAppDispatch} from '../../hooks/index.ts';
import {citiesList} from '../../const.ts';
import { setCurrentCity } from '../../store/all-offers/all-offers.slice.ts';

export default function ListCity(): JSX.Element {
  const dispatch = useAppDispatch();
  //const activeCity = useAppSelector(currentCity);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            citiesList.map((item) => (
              <li className="locations__item" key={item.name} >
                <Link className="locations__item-link tabs__item" to={AppRoute.Main} onClick={(evt) => {
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
