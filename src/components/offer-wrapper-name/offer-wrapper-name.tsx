import { memo } from "react";
import { SvgSizeByPlace, classButtonFaforiteType } from "../../const";
import { TOffer, TVariantPlace } from "../../types/types";

type OfferWrapperNameProps = {
  activeOffer: TOffer;
  variantPlace: TVariantPlace;
  changeStatusFavorite: () => void;
}

function OfferWrapperName({ activeOffer, variantPlace, changeStatusFavorite }: OfferWrapperNameProps): JSX.Element {
  return (
    <div className="offer__name-wrapper">
      <h1 className="offer__name">
        {activeOffer.title}
      </h1>
      <button
        className={
          (activeOffer.isFavorite) ?
            `offer__${classButtonFaforiteType.default} offer__${classButtonFaforiteType.favorite} button` :
            `offer__${classButtonFaforiteType.default} button`
        }
        type="button"
        onClick={changeStatusFavorite}
      >
        <svg
          className="offer__bookmark-icon"
          width={SvgSizeByPlace[variantPlace].width}
          height={SvgSizeByPlace[variantPlace].height}
        >
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    </div>
  )
}

const MemoizedOfferWrapperName = memo(OfferWrapperName);
export default MemoizedOfferWrapperName
