import { assets } from "../../assets/assets";
import OurServices from "../OurServices/OurServices";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <p className="header-left-text_1">Free Service for clients</p>
        <p className="header-left-text_2">Find your local agent</p>

        <div className="header-left-dollar">
          <div className="header-left-dollar-sign background-color1">
            <span className="header-left-dollar-sign-text">Sell</span>
            <span className="header-left-dollar-sign-symbol">$</span>
          </div>

          <div className="header-left-dollar-sign background-color2">
            <span className="header-left-dollar-sign-text">Rent</span>
            <span className="header-left-dollar-sign-symbol">$</span>
          </div>

          <p className="header-left-text_3">with case!</p>
        </div>

        <div className="header-left-find">
          <input
            className="header-left-find-input"
            type="text"
            placeholder="Enter your postcode or surburb"
          />
          <button className="header-left-find-button">Find Agent</button>
        </div>

        <div>
          <OurServices />
        </div>
      </div>

      <div className="header-right">
        <img src={assets.home_image} alt="" />
      </div>
    </div>
  );
}

export default Header;
