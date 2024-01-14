import { Link } from "react-router-dom";

export default function PlaceLink(props) {
  const { place } = props;
  return (
    <Link to={`/places/${place.id}`} className={`placeLink ${place.id}`}>
      <img className="placeLinkImage" src={place.image} alt={place.title} />
      <div className="placeLinkContent">
        <h3 className="placeLinkTitle">{place.title}</h3>
      </div>
    </Link>
  );
}
