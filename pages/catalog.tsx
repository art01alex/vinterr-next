import Header from "../components/header";
import SaleBlock from "../components/saleBlock";
import { motion } from 'framer-motion';
import TitlePage from '../components/titlePage';

export const getStaticProps = async () => {
	
}


const Catalog = (): JSX.Element => {


	return <motion.div
		exit={{ opacity: 0 }}
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
	>
		<Header />
		<div className="wrapper">
			<TitlePage>Каталог</TitlePage>
			<SaleBlock />
			<SaleBlock />
			<SaleBlock />
			<SaleBlock />
		</div>


	</motion.div>;
};

export default Catalog;