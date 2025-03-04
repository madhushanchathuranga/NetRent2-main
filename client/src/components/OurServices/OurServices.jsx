import ButtonComponent from "../StyledComponents/ButtonComponent/ButtonComponent";
import "./OurServices.scss";

function OurServices() {
  return (
    <div className="our-services">
      <p className="our-services-title">Our Services - In detail</p>

      <div className="our-services-container">
        <ButtonComponent name="Residential Property Sales" />
        <ButtonComponent name="Residential Property Management" />
        <ButtonComponent name="Commercial Property Sales" />
        <ButtonComponent name="Business Sales" />
        <ButtonComponent name="Buyers Agent" />
      </div>
    </div>
  );
}

export default OurServices;
