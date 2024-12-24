import type {ListOfferProps} from '../../types.ts';
import CardOffer from '../card-offer/card-offer.tsx';

export default function ListOffer({listOffer,variantCard, mouseMove} : ListOfferProps) : JSX.Element {
  return (
    <>
      {listOffer.map((item) => (
        <CardOffer offer = {item} key = {item.id} variantCard={variantCard} mouseMove={mouseMove} />
      )
      )}
    </>
  );
}


