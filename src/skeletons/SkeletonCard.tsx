import "../components/Card/Card.scss";

const SkeletonCard = () => {
  return (
    <div className="photo-card-content">
      <div className="card-img-container skeleton">
        <div className="card-image skeleton"></div>
      </div>
      <div className="image-caption skeleton"></div>
      <div className="addition skeleton"></div>
    </div>
  );
};

export default SkeletonCard;
