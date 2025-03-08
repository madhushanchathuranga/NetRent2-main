import Header from "../../components/Header/Header";
import InDetailSection from "../../components/InDetailSection/InDetailSection";
import InDetailSection2 from "../../components/InDetailSection2/InDetailSection2";
import { assets } from "../../assets/assets";
import "./Home.scss";

function Home() {
  const detail_1 = {
    title: "Residential Property Sales",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque mattis sem sit amet egestas. Maecenas aliquam ornare diam, sit amet varius risus viverra a. Curabitur mollis enim fringilla, laoreet mauris eu, sodales ipsum. Sed at sem mollis, tincidunt risus ut, pharetra ligula.",
  };

  const detail_2 = {
    title: "Residential Property Management",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque mattis sem sit amet egestas. Maecenas aliquam ornare diam, sit amet varius risus viverra a. Curabitur mollis enim fringilla, laoreet mauris eu, sodales ipsum. Sed at sem mollis, tincidunt risus ut, pharetra ligula.",
  };

  const detail_3 = {
    title: "Commercial Property Sales",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque mattis sem sit amet egestas. Maecenas aliquam ornare diam, sit amet varius risus viverra a. Curabitur mollis enim fringilla, laoreet mauris eu, sodales ipsum. Sed at sem mollis, tincidunt risus ut, pharetra ligula.",
  };

  const detail_4 = {
    title: "Commercial Property management",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque mattis sem sit amet egestas. Maecenas aliquam ornare diam, sit amet varius risus viverra a. Curabitur mollis enim fringilla, laoreet mauris eu, sodales ipsum. Sed at sem mollis, tincidunt risus ut, pharetra ligula.",
  };

  const detail_5 = {
    title: "Buyers Agent",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque mattis sem sit amet egestas. Maecenas aliquam ornare diam, sit amet varius risus viverra a. Curabitur mollis enim fringilla, laoreet mauris eu, sodales ipsum. Sed at sem mollis, tincidunt risus ut, pharetra ligula.",
  };

  const detail_6 = {
    title: "Rooming",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque mattis sem sit amet egestas. Maecenas aliquam ornare diam, sit amet varius risus viverra a. Curabitur mollis enim fringilla, laoreet mauris eu, sodales ipsum. Sed at sem mollis, tincidunt risus ut, pharetra ligula.",
  };

  const detail_7 = {
    title: "Business  Sales",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque mattis sem sit amet egestas. Maecenas aliquam ornare diam, sit amet varius risus viverra a. Curabitur mollis enim fringilla, laoreet mauris eu, sodales ipsum. Sed at sem mollis, tincidunt risus ut, pharetra ligula.",
  };

  return (
    <div>
      <Header />
      <InDetailSection
        title={detail_1.title}
        image={assets.image2}
        description={detail_1.description}
      />
      <InDetailSection2
        title={detail_2.title}
        image={assets.image2}
        description={detail_2.description}
      />

      <InDetailSection
        title={detail_3.title}
        image={assets.image2}
        description={detail_3.description}
      />

      <InDetailSection2
        title={detail_4.title}
        image={assets.image2}
        description={detail_4.description}
      />

      <InDetailSection
        title={detail_5.title}
        image={assets.image2}
        description={detail_5.description}
      />

      <InDetailSection2
        title={detail_6.title}
        image={assets.image2}
        description={detail_6.description}
      />

      <InDetailSection
        title={detail_7.title}
        image={assets.image2}
        description={detail_7.description}
      />
    </div>
  );
}

export default Home;
