import type {TOfferPreview, TVariantCard, TVariantPlace} from '../../types.ts';
import CardOffer from '../card-offer/card-offer.tsx';

type ListOfferProps = {
  listOffer : TOfferPreview[];
  variantCard: TVariantCard;
  variantPlace : TVariantPlace;
}

export default function ListOffer({listOffer, variantCard, variantPlace }: ListOfferProps): JSX.Element {

  return (
    <>
      {listOffer.map((item) => (
        <CardOffer offer={item} key={item.id} variantCard={variantCard} variantPlace={variantPlace}/>
      )
      )}
    </>
  );
}
