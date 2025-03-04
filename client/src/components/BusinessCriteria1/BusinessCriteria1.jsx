import "./BusinessCriteria1.scss";

function BusinessCriteria1() {
  return (
    <div className="business-criteria-1">
      <form className="business-criteria-1_form">
        <div className="business-criteria-1_form_input">
          <div className="business-criteria-1_form_input_icon">
            <img src="" alt="" />
          </div>
          <input
            className="business-criteria-1_form_input_textfield"
            type="text"
            placeholder="Search Business"
          />
        </div>

        <div className="business-criteria-1_form_input">
          <div className="business-criteria-1_form_input_icon">
            <img src="" alt="" />
          </div>
          <input
            className="business-criteria-1_form_input_textfield"
            type="text"
            placeholder="Location"
          />
        </div>

        <div style={{ display: "flex" }}>
          <div className="business-criteria-1_form_input">
            <div className="business-criteria-1_form_input_icon">
              <img src="" alt="" />
            </div>
            <input
              className="business-criteria-1_form_input_textfield-short"
              type="text"
              placeholder="Max Price"
            />
          </div>

          <div className="business-criteria-1_form_input">
            <div className="business-criteria-1_form_input_icon">
              <img src="" alt="" />
            </div>
            <input
              className="business-criteria-1_form_input_textfield-short"
              type="text"
              placeholder="Min Price"
            />
          </div>
        </div>

        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default BusinessCriteria1;
