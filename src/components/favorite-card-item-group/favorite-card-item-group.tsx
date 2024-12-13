
import type {OfferPreview} from '../../types.ts';
//import FavoriteCard from '../favorite-card/favorite-card.tsx';
import CardOffer from '../card-offer/card-offer.tsx'


type ListOfferProps = {
  listOffer: OfferPreview[];
  variantCard : 'cities'|'favorite';
  mouseMove: (id:string|null) => void;
}

export default function FavoriteCardItemGroup({listOffer, variantCard, mouseMove}: ListOfferProps): JSX.Element {
  const citySet = new Set(listOffer.map((item) => item.city.name));
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
            {listOffer.map((itemOffer) =>
              (
                //(itemOffer.city.name === city) && <FavoriteCard offer={itemOffer} key={itemOffer.id} variantCard={variantCard} mouseMove={mouseMove} />
                (itemOffer.city.name === city) && <CardOffer offer = {itemOffer} key = {itemOffer.id} variantCard={variantCard} mouseMove={mouseMove} />

              )
            )}
          </div>
        </li>
      )
      )}
    </>
  );
}
