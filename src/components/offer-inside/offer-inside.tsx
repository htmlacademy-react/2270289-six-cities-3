
type OfferInsideProps = {
  goods: string[]
}

export default function OfferInside({ goods }: OfferInsideProps): JSX.Element {
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
