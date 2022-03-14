import Header from "../components/headerTrans";
import SaleBlock from "../components/saleBlock";
import AboutBlock from "../components/aboutBlock";
import Footer from "../components/footer";
import { motion } from 'framer-motion';
import GlavBlock from "../components/glav_block";
import Contact from '../components/kontact/contact';
import OptBlock from '../components/optBlock';

const Home = (): JSX.Element => {
  return <motion.div
    exit={{ opacity: 0 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <Header />
    <GlavBlock />
    <div className="wrapper">
      <SaleBlock />
      <SaleBlock />
      <AboutBlock />
      <Contact />
    </div>
    <Footer />
  </motion.div>;
};

export default Home;