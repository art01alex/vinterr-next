import Header from "../components/header";
import SaleBlock from "../components/saleBlock";
import AboutBlock from "../components/aboutBlock";
import Footer from "../components/footer";
import { motion } from 'framer-motion';

const Documents = (): JSX.Element => {
	return <motion.div
		exit={{ opacity: 0 }}
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
	>
		<Header />
		<div className="wrapper">
			<div className="App">
				<a href="https://vinterr-plus.ru/wp-content/uploads/2021/01/акции.pdf" target="_blank">Download Pdf</a>
				<br />
				<a href="https://vinterr-plus.ru/wp-content/uploads/2021/01/согласие-на-обработку-данных.pdf" target="_blank">Download Pdf</a>
			</div>
		</div>
		<Footer />

	</motion.div>;
};

export default Documents;