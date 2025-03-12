import { memo } from "react";
import { TOffer } from "../../types/types";

type OfferHostProps = {
  activeOffer: TOffer;
}

function OfferHost({ activeOffer }: OfferHostProps): JSX.Element {
  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <div className="offer__host-user user">
        <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
          <img className="offer__avatar user__avatar"
            src={activeOffer.host.avatarUrl}
            width="74" height="74" alt="Host avatar"
          />
        </div>
        <span className="offer__user-name">
          {activeOffer.host.name}
        </span>
        <span className="offer__user-status">
          {(activeOffer.host.isPro) && ('Pro')}
        </span>
      </div>
      <div className="offer__description">
        <p className="offer__text">
          {activeOffer.description}
        </p>
      </div>
    </div>
  )
}

const MemoizedOfferHost = memo(OfferHost);
export default MemoizedOfferHost
