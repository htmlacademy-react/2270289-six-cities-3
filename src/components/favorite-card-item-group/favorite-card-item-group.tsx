import { Link } from 'react-router-dom';
import type { TOfferPreview, TVariantCard } from '../../types/types.ts';
import CardOffer from '../card-offer/card-offer.tsx';
import { AppRoute } from '../../const.ts';
import { setCurrentCity } from '../../store/all-offers/all-offers.slice.ts';
import { useAppDispatch } from '../../hooks/index.ts';
import { getCityByCityName } from '../../utils.ts';

type ListOfferProps = {
  listOffer: TOfferPreview[];
  variantCard: TVariantCard;
}

export default function FavoriteCardItemGroup({ listOffer, variantCard }: ListOfferProps): JSX.Element {

  const dispatch = useAppDispatch();

  const citiesSet = new Set(listOffer.map((item) => item.city.name));
  const citiesArray = [...citiesSet];

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {citiesArray.map((city) => (
          <li className="favorites__locations-items" key={city}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link className="locations__item-link"
                  to={AppRoute.Main}
                  onClick={() => dispatch(setCurrentCity(getCityByCityName(city)))}
                >
                  <span>{city}</span>
                </Link>
              </div>
            </div>
            <div className="favorites__places">
              {listOffer.map((itemOffer) =>
              (
                (itemOffer.city.name === city) &&
                <CardOffer
                  offer={itemOffer}
                  key={itemOffer.id}
                  variantCard={variantCard}
                  variantPlace='place-card'
                />
              )
              )}
            </div>
          </li>
        )
        )}
      </ul>
    </section>
  );
}
