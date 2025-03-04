import FindAgentComponent from "../FindAgentComponent/FindAgentComponent";
import "./InDetailSection.scss";
import PropTypes from "prop-types";

function InDetailSection({ title, description, image }) {
  return (
    <div className="in-detail-section">
      <div className="in-detail-section_left">
        <p className="in-detail-section_left_title">{title}</p>
        <p className="in-detail-section_left_description">{description}</p>
        <FindAgentComponent />
      </div>

      <div className="in-detail-section_right">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

InDetailSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image1: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default InDetailSection;
