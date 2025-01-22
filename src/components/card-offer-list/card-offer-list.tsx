import type {OfferPreview} from '../../types.ts';
import CardOffer from '../card-offer/card-offer.tsx';
import { useAppSelector } from '../../hooks/index.ts';
import { getSortedListOffer } from '../../utils.ts';

type ListOfferProps = {
  listOffer: OfferPreview[];
  variantCard : 'cities'|'favorite'|'near-places';
}

export default function ListOffer({listOffer,variantCard} : ListOfferProps) : JSX.Element {
  const currentSort = useAppSelector((state) => state.currentSort);
  const sortedListOffer = getSortedListOffer(currentSort,listOffer);

  return (
    <>
      {sortedListOffer.map((item) => (
        <CardOffer offer = {item} key = {item.id} variantCard={variantCard} />
      )
      )}
    </>
  );
}
