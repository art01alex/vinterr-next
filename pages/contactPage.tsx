import Header from "../components/header";
import Footer from "../components/footer";
import { motion } from 'framer-motion';
import Contact from '../components/kontact/contact';
import TitlePage from '../components/titlePage';

const ContactPage = (): JSX.Element => {
	return <motion.div
		exit={{ opacity: 0 }}
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
	>
		<Header />
		<div className="wrapper">
			<Contact />
		</div>
		<Footer />

	</motion.div>;
};

export default ContactPage;