
import type { ListPreviewCardProps } from '../../components/card/card.tsx';
import FavoriteCard from '../favorite-card/favorite-card.tsx';

export default function FavoriteCardItemGroup({ listPreviewCards }: ListPreviewCardProps): JSX.Element {
  const citySet = new Set(listPreviewCards.map((item) => item.city.name));
  const cityArr = [...citySet];
  return (
    <>
      {cityArr.map((city) => (
        <li className="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {listPreviewCards.map((itemCard) =>
              (
                (itemCard.city.name === city) && <FavoriteCard card={itemCard} key={itemCard.id} />
              )
            )}
          </div>
        </li>
      )
      )}
    </>
  );
}
