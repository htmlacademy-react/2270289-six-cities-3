import type {OfferPreview} from '../../types.ts';
import CardOffer from '../card-offer/card-offer.tsx';
//import {useAppSelector } from '../../hooks/index.ts';
//import {selectorSortedListOffer,selectorNearListOffer } from '../../store/selectors.ts';
//import {shallowEqual } from 'react-redux';

type ListOfferProps = {
  listOffer : OfferPreview[];
  variantCard: 'cities' | 'favorite' | 'near-places';
}

export default function ListOffer({listOffer, variantCard }: ListOfferProps): JSX.Element {
  /*
  let sortedListOffer = useAppSelector(selectorSortedListOffer,shallowEqual);
  const sortedNearListOffer = useAppSelector(selectorNearListOffer,shallowEqual);

  if (variantCard === 'near-places') {
    sortedListOffer = sortedNearListOffer;
  }
  */
  return (
    <>
      {listOffer.map((item) => (
        <CardOffer offer={item} key={item.id} variantCard={variantCard} />
      )
      )}
    </>
  );
}
