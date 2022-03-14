import Link from 'next/link';

const Footer = (): JSX.Element => {

    return <footer>
        <div className="footer-container">
            <div className="footer-container-nav">
                <div className="footer-container-nav--block">
                    <p className='footer-container-nav-title'>Категории</p>
                    <ul>
                        <li>
                            <Link href={'/catalog'}>
                                <a className='footer-container-nav-link'>Кардиганы и жакеты</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/catalog'}>
                                <a className='footer-container-nav-link'>Костюмы</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/catalog'}>
                                <a className='footer-container-nav-link'>Платья и юбки</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/catalog'}>
                                <a className='footer-container-nav-link'>Свитеры и джемперы</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/catalog'}>
                                <a className='footer-container-nav-link'>Футболки и топы</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/catalog'}>
                                <a className='footer-container-nav-link'>Шапки и шарфы</a>
                            </Link>
                        </li>
                    </ul >
                </div >
                <div className="footer-container-nav--block">
                    <p className='footer-container-nav-title'>Навигация</p>
                    <ul>
                        <li>
                            <Link href={'/about'}>
                                <a className='footer-container-nav-link'>О нас</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/contactPage'}>
                                <a className='footer-container-nav-link'>Контакты</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/dostavka'}>
                                <a className='footer-container-nav-link'>Доставка и оплата</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/reviews'}>
                                <a className='footer-container-nav-link'>Отзывы</a>
                            </Link>
                        </li>
                    </ul >
                </div >
                <div className="footer-container-nav--block">
                    <p className='footer-container-nav-title'>Покупателям</p>
                    <ul>
                        <li>
                            <Link href={'/opt'}>
                                <a className='footer-container-nav-link'>Оптовым покупателям</a>
                            </Link>
                            <li>
                                <a className='footer-container-nav-link' href="https://vinterr-plus.ru/wp-content/uploads/2021/01/согласие-на-обработку-данных.pdf" target="_blank">Cогласие на обработку данных</a>
                            </li>
                            <li>
                                <a className='footer-container-nav-link' href="https://vinterr-plus.ru/wp-content/uploads/2021/01/акции.pdf" target="_blank">Правила проведения акций</a>
                            </li>
                        </li>
                    </ul >
                </div >
                <div className="footer-container-nav--block">
                    <p className='footer-container-nav-title'>Свяжитесь с нами</p>
                    <ul>
                        <li>
                            <a href='mailto:info@vinterrplus.ru'><p className='footer-container-nav-link'>info@vinterrplus.ru</p></a>
                        </li>
                        <li>
                            <a href='tel:89227142991'><p className='footer-container-nav-link'>+7 (922) 714-29-91</p></a>
                        </li>
                        <li>
                            <a href='tel:89995833565'><p className='footer-container-nav-link'>+7 (999) 583-35-65</p></a>
                        </li>
                    </ul >
                </div >
            </div >
            <hr />
            <div className="coperaite">
                ©2022 Все права защищены. Интернет магазин vinterr-plus.ru
            </div>
        </div >
    </footer >;

};

export default Footer;