import Header from "../components/header";
import SaleBlock from "../components/saleBlock";
import AboutBlock from "../components/aboutBlock";
import Footer from "../components/footer";
import { motion } from 'framer-motion';
import Contact from '../components/kontact/contact';
export const getStaticProps = async () => {
	
}

const Home = (): JSX.Element => {
	return <motion.div
		exit={{ opacity: 0 }}
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
	>
		<Header />
		<div className="wrapper">
			<img className="cart-img" src="product2.png" alt="" />
		</div>


	</motion.div>;
};

export default Home;