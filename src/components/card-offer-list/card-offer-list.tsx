import type {OfferPreview} from '../../types.ts';
import CardOffer from '../card-offer/card-offer.tsx';
import { useAppSelector } from '../../hooks/index.ts';
import { SORT_OPTIONS, SortOption } from '../../const.ts';

type ListOfferProps = {
  listOffer: OfferPreview[];
  variantCard : 'cities'|'favorite'|'near-places';
}

const getSortedListOffer = (currentSort: string, listOffer: OfferPreview[]) => {
  const sortedListOffer = listOffer;

  switch (currentSort) {
    case (SORT_OPTIONS[SortOption.Popular]): return [...listOffer];
      break;
    case (SORT_OPTIONS[SortOption.PriceHighToLow]): sortedListOffer.sort((a,b) => b.price - a.price);
      break;
    case (SORT_OPTIONS[SortOption.PriceLowToHigh]): sortedListOffer.sort((a,b) => a.price - b.price);
      break;
    case (SORT_OPTIONS[SortOption.TopRatedFirst]): sortedListOffer.sort((a,b) => b.rating - a.rating);
      break;
  }

  return sortedListOffer;

};

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
