import PropTypes from "prop-types";
import "./AboutDetailBox.scss";

function AboutDetailBox({ title, description, image }) {
  return (
    <div className="about-detail-box">
      <div className="about-detail-box_header">
        <div className="about-detail-box_header_logo">
          <img src={image} alt="" />
        </div>

        <p className="about-detail-box_header_title">{title}</p>
      </div>

      <p className="about-detail-box_description">{description}</p>
    </div>
  );
}

AboutDetailBox.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default AboutDetailBox;
