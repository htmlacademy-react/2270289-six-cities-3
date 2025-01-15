import {directions} from '../../const.ts';

export default function MainCityMenu () : JSX.Element
{
  return (
    <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {
                directions.map((item) => (
                  <li className="locations__item" key = {item}>
                    <a className="locations__item-link tabs__item" href="#">
                      <span>{item}</span>
                    </a>
                  </li>)
                )
              }
            </ul>
          </section>
        </div>
  )
}
