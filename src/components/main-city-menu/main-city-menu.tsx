import { Link } from 'react-router-dom';
import { directions } from '../../const.ts';
import { store } from '../../store/store.ts';
import { setCityDefaultRedux } from '../../store/action.ts';

export default function MainCityMenu () : JSX.Element
{
  return (
    <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {
                directions.map((item) => (

                  <li className="locations__item" key = {item} >
                    <Link className="locations__item-link tabs__item" to="" onClick={() =>{
                    store.dispatch(setCityDefaultRedux(item));
                    console.log(store.getState());
                    }
                  }>
                      <span>{item}</span>
                    </Link>
                  </li>)
                )
              }
            </ul>
          </section>
        </div>
  )
}
