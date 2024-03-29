import Header from "../components/header";
import Footer from "../components/footer";
import { motion } from 'framer-motion';
import TitlePage from '../components/titlePage';

const About = (): JSX.Element => {
	return <motion.div
		exit={{ opacity: 0 }}
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
	>
		<Header />
		<div className="wrapper">
			<TitlePage>О нас</TitlePage>
			<div className="page_container">

				<h2>МЫ - КОМПАНИЯ VINTERR PLUS</h2>
				<p>Производим вязаный трикотаж с 2019 года в Челябинске. Мы тщательно следим за качеством всех изделий и постоянно растем и развиваемся. Все наши сотрудники - знатоки своего дела, которые имеют за плечами многолетний опыт работы с трикотажем. Наша цель - высокое качество по доступным ценам. В производстве мы используем различную по составу пряжу от российских и зарубежных производителей.</p>
				<h2>Шерсть</h2>
				<p>Шерсть - это натуральное волокно животного происхождения. Она является уникальным терморегулятором, который не только согреет зимой, но и подарит прохладу в жару. Также шерсть устойчива к загрязнениям, не мнется и позволяет телу "дышать".</p>
				<h2>Акрил</h2>
				<p>Синтетические добавки в пряже увеличивают срок службы вещей, предотвращают сминаемость и помогают сохранить форму при стирке.С добавлением синтетических волокон одежда приобретает различные свойства: прочность, долговечность, быстрое высыхание.</p>
				<h2>Хлопок</h2>
				<p>Пряжа из хлопка не колется и приятна к телу.Из такой пряжи получатся мягкие джемперы и свитеры, а так же легкие футболки или майки - в изделиях из хлопка отличная терморегуляция, в них не будет жарко или холодно.</p >
				<h2>Вискоза</h2>
				<p>Изделия из вискозы мягкие и нежные, дышащие и приятные.При правильном уходе изделие прослужит очень долго, не растянется и не "скатается".Из - за структуры и свойств вискозы изделия имеют приятную тяжесть.</p >
				<h2>Шерсть</h2>
				<p>Шерсть - это натуральное волокно животного происхождения.Она является уникальным терморегулятором, который не только согреет зимой, но и подарит прохладу в жару.Также шерсть устойчива к загрязнениям, не мнется и позволяет телу "дышать".</p >

				<p>Мы обращаем особое внимание обработке и сборке изделий.Нам важно, чтоб изделие снаружи было так же красиво, как изнутри.</p>

				<p>Нам нравится заботиться о наших покупателях, и нам важно, чтоб они возвращались к нам вновь и вновь за новыми или полюбившимися моделями.</p>



				<p>Мы работаем как с физическими, так и с юридическими лицами, в розницу и оптом.Можем отгрузить небольшие партии от 10 единиц товара! Так же занимаемся производством одежды под Вашим брендом.Если у Вас есть конкретная модель, набросок или просто идея — Вы можете обратиться к нам и мы разработаем модель специально для Вас, отвяжем, сошьем и красиво упакуем.Шапки, джемперы, юбки, топы, брюки — практически любой вид одежды! Пряжу предлагаем из собственных запасов, а если Вам нужно что - то особенное, то закажем подходящую пряжу для Ваших моделей.С нами работать удобно и комфортно, ведь мы ценим всех своих клиентов и находим к каждому индивидуальный подход.</p >

				<p>Для удобства покупки розничными покупателями мы предлагаем витрину наших товаров в нашем интернет - магазине, а так же в Instagram.Здесь вы со всех сторон можете рассмотреть нашу одежду и выбрать ту, которая по душе, а наши менеджеры с удовольствием ответят на все интересующие вопросы.</p >

				<h2>НАШИ ПРЕИМУЩЕСТВА:</h2 >
				<h3>КАЧЕСТВЕННО</h3 >
				<p>Мы производим одежду на собственном оборудовании и отслеживаем каждый шаг производства.</p >

				<h3>ИНДИВИДУАЛЬНО</h3>
				<p>С каждым клиентом мы работаем по индивидуальной схеме, ведь все приходят с разными запросами, которые требуют разных решений.</p >

				<h3>ДОСТУПНО</h3>
				<p>Работаем не только с Челябинском, но и со всей России.Отправим в любую точку транспортной компанией.</p >

				<h3>ПРОФЕССИОНАЛЬНО</h3>
				<p>Все наши сотрудники профессионалы своего дела и имеют многолетний опыт работы с трикотажем.</p >

			</div>
		</div>

		<Footer />
	</motion.div>;
};

export default About;