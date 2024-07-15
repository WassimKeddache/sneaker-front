import "./SneakerInformation.css";

const SneakerInformation: React.FC<SneakerInformationProps> = ({
  sneakerData,
}) => {
  return (
    <div className="sneaker-container">
      <img
        className="sneaker-image"
        src={sneakerData.imageUrl}
        alt={`${sneakerData.name} image`}
      />
      <h3 className="sneaker-name">{sneakerData.name}</h3>
      <p className="sneaker-release">
        Release Date:{sneakerData.releaseDate} 2014-09-21
      </p>
      <p className="sneaker-category">Category: {sneakerData.category}</p>
    </div>
  );
};

export default SneakerInformation;
