import "./Footer.scss";
import { assets } from "../../assets/assets.js";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_heading">
        <img src={assets.logo} />
        <hr />
      </div>

      <div className="footer_content">
        <div className="footer_content_left">
          <p className="footer_content_left_title">NetRent</p>
          <p className="footer_content_left_subtitle">
            The leading property marketplace in Australia connecting sellers,
            buyers, and services on a fast-track hyper-sourced local real estate
            network for prompt conversion action!
          </p>

          <div className="footer_content_left_data">
            <div className="footer_content_left_data_contact">
              <p className="footer_content_left_data_contact_title">
                Contact Us
              </p>
              <ul className="footer_content_left_data_contact_menu">
                <li className="footer_content_left_data_contact_menu_item">
                  Unit 8/1151 Wynnum RD Cannon Hill,
                  <br /> Qld 4170
                </li>
                <li className="footer_content_left_data_contact_menu_item">
                  admin@netrent.com.au
                </li>
                <li className="footer_content_left_data_contact_menu_item">
                  07 3113 3882
                </li>
              </ul>
            </div>

            <div className="footer_content_left_data_links">
              <p className="footer_content_left_data_contact_title">
                Useful Links
              </p>
              <ul className="footer_content_left_data_contact_menu">
                <li className="footer_content_left_data_contact_menu_item">
                  About us
                </li>
                <li className="footer_content_left_data_contact_menu_item">
                  Residential
                </li>
                <li className="footer_content_left_data_contact_menu_item">
                  Commercial
                </li>
                <li className="footer_content_left_data_contact_menu_item">
                  Business
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer_content_right">
          <div className="footer_content_right_content">
            <div className="footer_content_right_content_section">
              <img src={assets.profile} alt="" />
              <div>
                <p className="footer_content_right_content_section_count">
                  54,000+
                </p>
                <p className="footer_content_right_content_section_text">
                  Agents Compared
                </p>
              </div>
            </div>

            <div className="footer_content_right_content_section">
              <img src={assets.countries} alt="" />
              <div>
                <p className="footer_content_right_content_section_count">
                  15,000+
                </p>
                <p className="footer_content_right_content_section_text">
                  Suburbs covered
                </p>
              </div>
            </div>

            <div className="footer_content_right_content_section">
              <img src={assets.peoples} alt="" />
              <div>
                <p className="footer_content_right_content_section_count">
                  15,000+
                </p>
                <p className="footer_content_right_content_section_text">
                  Suburbs covered
                </p>
              </div>
            </div>
          </div>

          <div className="footer_content_right_mail">
            <p className="footer_content_right_mail_text">
              Subscribe to our Newsletter:
            </p>
            <div className="footer_content_right_mail_search">
              <input type="text" placeholder="youremail@gmail.com" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
