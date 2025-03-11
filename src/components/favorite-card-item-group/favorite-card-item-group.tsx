import { Link } from 'react-router-dom';
import type {TOfferPreview, TVariantCard} from '../../types/types.ts';
import CardOffer from '../card-offer/card-offer.tsx';

type ListOfferProps = {
  listOffer: TOfferPreview[];
  variantCard : TVariantCard;
}

export default function FavoriteCardItemGroup({listOffer, variantCard}: ListOfferProps): JSX.Element {
  const citySet = new Set(listOffer.map((item) => item.city.name));
  const cityArr = [...citySet];
  return (
    <>
      {cityArr.map((city) => (
        <li className="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="#">
                <span>{city}</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            {listOffer.map((itemOffer) =>
              (
                (itemOffer.city.name === city) &&
                <CardOffer
                  offer = {itemOffer}
                  key = {itemOffer.id}
                  variantCard={variantCard}
                  variantPlace='place-card'
                />
              )
            )}
          </div>
        </li>
      )
      )}
    </>
  );
}
