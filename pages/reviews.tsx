import Header from "../components/header";
import SaleBlock from "../components/saleBlock";
import AboutBlock from "../components/aboutBlock";
import Footer from "../components/footer";
import { motion } from 'framer-motion';
import Contact from '../components/kontact/contact';
import TitlePage from '../components/titlePage';

const Reviews = (): JSX.Element => {
	return <motion.div
		exit={{ opacity: 0 }}
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
	>
		<Header />
		<div className="wrapper">
			<TitlePage>Отзывы</TitlePage>
			<div style={{ maxWidth: '760px', height: '800px', overflow: 'hidden', position: 'relative', display: 'block', margin: 'auto' }}>
				<iframe
					style={{ width: '100%', height: '100%', border: '1px solid #e6e6e6', borderRadius: '8px', boxSizing: 'border-box' }}
					src="https://yandex.ru/maps-reviews-widget/212157806958?comments">
				</iframe>
				<a href="https://yandex.ru/maps/org/vinterr_plyus/212157806958/"
					target="_blank"
					style={{ boxSizing: 'border-box', textDecoration: 'none', color: '#b3b3b3', fontSize: '10px', fontFamily: 'Open Sans", sans-serif', padding: '0 20px', position: 'absolute', bottom: '8px', width: '100%', textAlign: 'center', left: '0' }}
				>
					Винтерр Плюс на карте Челябинска — Яндекс Карты
				</a>
			</div>
		</div >
		<Footer />


	</motion.div >;
};

export default Reviews;


