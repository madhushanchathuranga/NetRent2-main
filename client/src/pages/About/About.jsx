import { assets } from "../../assets/assets";
import AboutDetailBox from "../../components/AboutDetailBox/AboutDetailBox";
import AboutUsCard from "../../components/AboutUsCard/AboutUsCard";
import "./About.scss";

function About() {
  const detail_1 = {
    title: "What’s going on behind the show!",
    description:
      "At its base, Netrent Properties is a well-rounded real-estate agency platform that offers a full range of real estate services managed by a highly skilled and responsive team of professionals. We apply the full spectrum of our key competencies to bridge residential and commercial projects with the right customers. These projects can range from ground-up, acquired, or redeveloped projects looking for a single point destination to get the right elevation and support with property dealing.",
  };

  const detail_2 = {
    title: "Built on the latest tech!",
    description:
      "The system utilizes the finest marketplace technology, platform resources, and process machinery to assure quality and consistency of results at all levels. It puts across a finely curated list of property databases that is profusely drawn and precisely categorized to reveal the most relevant results, reducing the chance of erroneous matches and session fallouts to a close-to-nil possibility. The platform offers users to hit quick and accurate searches through advanced query filters, predictive triggers, and auto search suggestions, making it incredibly quick and effortless to get the best matches for search queries",
  };

  const detail_3 = {
    title: "Safest deals happen at Netrent",
    description:
      "Each service is vetted for authentic process application and credible listing practices powered by precise quality checks and multi-factor approvals to make it an authentic, reliable, and hassle-free service experience for its users. The system has a prompt support and assistance panel to help users with any query and set them through with a safe and smooth service experience on Netrent.",
  };

  const detail_card_1 = {
    title: "The Underlying Mission",
    description:
      "We are on the mission to build solutions that help people connect with the finest digital possibilities bringing together innovative service platform ideas and integrated tech to build people-empowering systems at the pace of trend.",
  };

  const detail_card_2 = {
    title: "Our Key Values",
    description:
      "We keep the motive of service and commitment towards quality at the core of everything we do. Building progressive digital communities on tech-led ideas is one of our strengths, and we keep dwelling on it to create leading business opportunities and higher customer value through disruptive service platforms like Netrent.",
  };

  return (
    <div className="about">
      <div className="about_header">
        <div className="about_header_heading">
          <div className="about_header_heading_title">About</div>
          <div className="about_header_heading_subtitle">
            <p>
              NetRent<br></br>
              Properties
            </p>
          </div>
        </div>

        <div className="about_header_text">
          <h2 className="about_header_text_title">
            Your one-stop property search destination in Australia
          </h2>
          <p className="about_header_text_para">
            Netrent Properties is a pro-domain property search and agency
            services platform in Australia. It is designed to deliver a digital
            system connecting users to buy, sell, and rent properties
            interacting with the local prospects.
          </p>
          <p className="about_header_text_para">
            Netrent services are primarily segregated across four major
            divisions – Property Management, Business Sales, Commercial Selling,
            and Residential Selling. The platform offers a unified single-window
            service interface with interactive features to make real-estate
            dealing a sure digital bet for Australian neighborhoods.
          </p>
        </div>
      </div>

      <div className="about_content">
        <AboutDetailBox
          title={detail_1.title}
          description={detail_1.description}
        />

        <AboutDetailBox
          title={detail_2.title}
          description={detail_2.description}
        />

        <AboutDetailBox
          title={detail_3.title}
          description={detail_3.description}
        />
      </div>

      <AboutUsCard
        title={detail_card_1.title}
        description={detail_card_1.description}
        logo={assets.logo_target}
        image={assets.card_image_1}
      />

      <AboutUsCard
        title={detail_card_2.title}
        description={detail_card_2.description}
        logo={assets.logo_key}
        image={assets.card_image_2}
      />
    </div>
  );
}

export default About;
