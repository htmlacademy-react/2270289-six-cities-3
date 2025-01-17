import type {OfferPreview} from '../../types.ts';
import CardOffer from '../card-offer/card-offer.tsx';

type ListOfferProps = {
  listOffer: OfferPreview[];
  variantCard : 'cities'|'favorite'|'near-places';
  //mouseMove: (id:string|null) => void;
}

export default function ListOffer({listOffer,variantCard} : ListOfferProps) : JSX.Element {
  return (
    <>
      {listOffer.map((item) => (
        <CardOffer offer = {item} key = {item.id} variantCard={variantCard} />
      )
      )}
    </>
  );
}

//mouseMove={mouseMove}
