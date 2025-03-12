import { memo } from "react";

type OfferInsideProps = {
  goods: string[]
}

function OfferInside({ goods }: OfferInsideProps): JSX.Element {
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {goods.map((itemGood) => (
          <li className="offer__inside-item" key={itemGood}>
            {itemGood}
          </li>)
        )}
      </ul>
    </div>

  )
}

const MemoizedOfferInside = memo(OfferInside);
export default MemoizedOfferInside
