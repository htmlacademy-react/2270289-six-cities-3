import type {TOfferPreview} from '../../types.ts';
import CardOffer from '../card-offer/card-offer.tsx';

type ListOfferProps = {
  listOffer : TOfferPreview[];
  variantCard: 'cities' | 'favorite' | 'near-places';
}

export default function ListOffer({listOffer, variantCard }: ListOfferProps): JSX.Element {

  return (
    <>
      {listOffer.map((item) => (
        <CardOffer offer={item} key={item.id} variantCard={variantCard} />
      )
      )}
    </>
  );
}
