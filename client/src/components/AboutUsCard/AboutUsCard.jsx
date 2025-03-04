import "./AboutUsCard.scss";
import PropTypes from "prop-types";

function AboutUsCard({ image, logo, title, description }) {
  return (
    <div className="about-us-card">
      <div className="about-us-card_left">
        <img src={image} alt="" />
      </div>
      <div className="about-us-card_right">
        <img src={logo} alt="" />
        <h2 className="about-us-card_right_title">{title}</h2>
        <p className="about-us-card_right_description">{description}</p>
      </div>
    </div>
  );
}

AboutUsCard.propTypes = {
  image: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AboutUsCard;
