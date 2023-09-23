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
import { Link } from "react-scroll";
import { ROUTES } from "@assets/utils/routes";
import useScroll from "@assets/func/useScroll";
import { info } from "@assets/utils/data";

const Home = () => {
  const { showScrollButton } = useScroll();
  return (
    <>
      <HomeBinder />
      <PageIntro />
      <PageRules />
      <PageCriteria />
      <Faq />
      <Timeline />
      <PriceAward />
      <Patner />
      <Policy />
      <Footer />
      {showScrollButton && (
        <Link
          {...info}
          to={ROUTES.sect}
          className="justify-center z-40 shadow-violet-800 shadow-md items-center text-2xl text-white font-bold w-8 h-8 flex  bg-custom-light rounded-full fixed cursor-pointer  bottom-20 right-10 max-sm:right-5"
        >
          &uarr;
        </Link>
      )}
    </>
  );
};

export default Home;
