import "./InDetailSection2.scss";
import FindAgentComponent from "../FindAgentComponent/FindAgentComponent";
import PropTypes from "prop-types";

function InDetailSection2({ title, description, image }) {
  return (
    <div className="in-detail-section">
      <div className="in-detail-section_left">
        <img src={image} alt="" />
      </div>

      <div className="in-detail-section_right">
        <p className="in-detail-section_right_title">{title}</p>
        <p className="in-detail-section_right_description">{description}</p>
        <FindAgentComponent />
      </div>
    </div>
  );
}

InDetailSection2.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image1: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default InDetailSection2;
