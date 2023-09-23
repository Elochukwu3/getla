import HomeBinder from "@components/HomeBinder";
import PageIntro from "@components/PageIntro";
import PageRules from "@components/PageRules";
import PageCriteria from "@components/PageCriteria";
import Faq from "@components/Faq/Index";
import PriceAward from "@components/PriceAward";
import Patner from "@components/Patner";
import Policy from "@components/Policy";
import Footer from "@components/Footer";
import Timeline from "@components/Timeline";

const Home = () => {
  return (
    <>
      <HomeBinder />
      <PageIntro />
      <PageRules />
      <PageCriteria />
      <Faq />
      <Timeline/>
      <PriceAward />
      <Patner />
      <Policy />
      <Footer />
    </>
  );
};

export default Home
