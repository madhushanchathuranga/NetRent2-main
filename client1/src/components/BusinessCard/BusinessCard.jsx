import "./BusinessCard.scss";
import propTypes from "prop-types";

function BusinessCard({ image, title, location, description }) {
  return (
    <div className="business-card">
      <div className="business-card_header">
        <div className="business-card_header_rectangle">Featured</div>
        <div className="business-card_header_price">$ 200,000</div>
        <button className="business-card_header_contact">Contact</button>
      </div>

      <div className="business-card_image">
        <img src={image} alt="" />
      </div>

      <div className="business-card_detail">
        <div className="business-card_detail_title">{title}</div>
        <div className="business-card_detail_location">
          <div className="business-card_detail_location_logo"></div>
          <p className="business-card_detail_location_text">{location}</p>
        </div>
        <div className="business-card_detail_description">{description}</div>
      </div>
    </div>
  );
}

BusinessCard.propTypes = {
  image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};

export default BusinessCard;
