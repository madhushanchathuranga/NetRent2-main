import { assets } from "../../assets/assets";
import BusinessCard from "../../components/BusinessCard/BusinessCard";
import BusinessCriteria1 from "../../components/BusinessCriteria1/BusinessCriteria1";
import BusinessTextCard from "../../components/BusinessTextCard/BusinessTextCard";
import "./Business.scss";

function Business() {
  const data1 = {
    title: "35135 Electrical Maintenance Business - Profit and Clients ",
    location: "Cannon Hill VLC",
    description:
      "Now is your chance to cash in with revenue at the $300k mark and profits over 50%! Priced aggressively due to the vendor needing a quick sale, this business is perfect for existing electricians wanting to go out on their own or add...",
  };
  return (
    <div className="business">
      <div className="business_left">
        <p className="business_left_title">Current Criteria</p>
        <BusinessCriteria1 />
        <BusinessTextCard />
      </div>
      <div className="business_right">
        <BusinessCard
          title={data1.title}
          location={data1.location}
          description={data1.description}
          image={assets.business_card_image_1}
        />

        <BusinessCard
          title={data1.title}
          location={data1.location}
          description={data1.description}
          image={assets.business_card_image_2}
        />

        <BusinessCard
          title={data1.title}
          location={data1.location}
          description={data1.description}
          image={assets.business_card_image_3}
        />

        <BusinessCard
          title={data1.title}
          location={data1.location}
          description={data1.description}
          image={assets.business_card_image_4}
        />
      </div>
    </div>
  );
}

export default Business;
