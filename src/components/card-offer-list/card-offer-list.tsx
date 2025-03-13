import { memo } from 'react';
import type {TOfferPreview, TVariantCard, TVariantPlace} from '../../types/types.ts';
import CardOffer from '../card-offer/card-offer.tsx';

type ListOfferProps = {
  listOffer : TOfferPreview[];
  variantCard: TVariantCard;
  variantPlace : TVariantPlace;
}

function ListOffer({listOffer, variantCard, variantPlace }: ListOfferProps): JSX.Element {

  return (
    <>
      {listOffer.map((item) => (
        <CardOffer offer={item} key={item.id} variantCard={variantCard} variantPlace={variantPlace}/>
      )
      )}
    </>
  );
}

const MemoizedListOffer = memo(ListOffer);
export default MemoizedListOffer;
