import PropTypes from "prop-types";
import "./ButtonComponent.scss";

function ButtonComponent({ name }) {
  return (
    <div>
      <button className="button">
        <p>{name}</p>
      </button>
    </div>
  );
}

ButtonComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ButtonComponent;
