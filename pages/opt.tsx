import Header from "../components/header";
import SaleBlock from "../components/saleBlock";
import AboutBlock from "../components/aboutBlock";
import Footer from "../components/footer";
import { motion } from 'framer-motion';
import Contact from '../components/kontact/contact';
import TitlePage from '../components/titlePage';

const Dostavka = (): JSX.Element => {
	return <motion.div
		exit={{ opacity: 0 }}
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
	>
		<Header />
		<div className="wrapper">
			<TitlePage>ОПТОВЫМ ПОКУПАТЕЛЯМ</TitlePage>
			<div className="page_container">
				<h2>ЗАКАЖИТЕ У НАС ВЯЗАНЫЙ ТРИКОТАЖ ОПТОМ!</h2>
				<p>Цена и сроки изготовления рассчитываются индивидуально.На них влияют вид товара, его количество и время изготовления.Оптовым покупателям мы предлагаем отдельный прайс.Для получения прайса отправьте заявку на почту info @vinterrplus.ru или позвоните по номеру + 7(999) 583 - 35 - 65.</p>
				<h2>БЫСТРО И КАЧЕСТВЕННО</h2>
				<p>Наши изделия выделяются среди конкурентов современным минималистичным кроем, качеством пряжи и доступной ценой.В производстве одежды мы используем качественную пряжу – шерсть, вискоза, акрил, хлопок.</p>
				<p>Можем доставить Ваш заказ по всей России любой транспортной компанией.До пункта ТК в Челябинске одежда доставляется бесплатно, услуги транспортной компании оплачивает заказчик.</p>
				<h2>МЕЛКИЙ ОПТ</h2>
				<p>Готовы отгрузить небольшие партии от 10 единиц(цвет - размер).Выбирайте любые модели представленные на сайте! Приглашаем к сотрудничеству!</p>
			</div>
		</div>
		<Footer />


	</motion.div >;
};

export default Dostavka;


