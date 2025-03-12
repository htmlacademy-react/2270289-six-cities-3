
type OfferGalleryProps = {
  images: string[];
}

export default function OfferGallery({ images }: OfferGalleryProps): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {(images.map((urlImage) => (
          <div className="offer__image-wrapper" key={urlImage}>
            <img className="offer__image" src={urlImage} alt="Photo studio" />
          </div>
        )
        ))}
      </div>
    </div>
  )
}
