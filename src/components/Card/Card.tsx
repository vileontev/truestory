import "./Card.scss";
import { ICard, IPhoto } from "../../types/models";

interface CardProps {
  card: ICard | IPhoto;

  onModal: CallableFunction;
}

export function Card({ card, onModal }: CardProps) {
  const handleModalOpening = (cardState: ICard) => {
    console.log("card open in modal");
    onModal(cardState);
  };

  const today = new Date();

  return (
    <div className="photo-card-content">
      <figure className="card-img-container">
        <button
          onClick={() => {
            handleModalOpening(card);
          }}
          aria-label={`Open image ${card.title}`}>
          <img
            className="card-image"
            id="card-img"
            src={`${card.thumbnailUrl ? card.thumbnailUrl : card.url}`}
            alt={card.title}
            onError={(event) => {
              const target = event.target as HTMLImageElement;
              target.src = `https://placehold.co/280x280?text=${card.title}`;
            }}
          />
        </button>
      </figure>
      <h2 className="image-caption">{card.title}</h2>

      <p className="description hidden">{card.description || card.title}</p>
      <div className="addition">
        <span className="addition-wrapper" aria-label="Place where photo was taken and that date">
          {card.place || "Unkown place"}
          ,&nbsp;
          <time dateTime={card.year ? `${card.year}-01-01` : undefined}>{card.year || today.getFullYear()}</time>
        </span>
      </div>
    </div>
  );
}
