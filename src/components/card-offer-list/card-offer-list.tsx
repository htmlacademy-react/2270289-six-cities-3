import CardOffer from '../card-offer/card-offer.tsx';
import { useAppSelector } from '../../hooks/index.ts';
import { selectorSortedListOffer,selectorNearListOffer } from '../../store/selectors.ts';

type ListOfferProps = {
  variantCard: 'cities' | 'favorite' | 'near-places';
}

export default function ListOffer({ variantCard }: ListOfferProps): JSX.Element {

  let sortedListOffer = useAppSelector(selectorSortedListOffer);

  if (variantCard === 'near-places') sortedListOffer = useAppSelector(selectorNearListOffer);

  return (
    <>
      {sortedListOffer.map((item) => (
        <CardOffer offer={item} key={item.id} variantCard={variantCard} />
      )
      )}
    </>
  );
}
