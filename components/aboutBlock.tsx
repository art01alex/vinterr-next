import Script from "next/script";

const AboutBlock = (): JSX.Element => {

    return <section className="seсtion section-about">
        <div className="section-title ">
            <h2 className='title'>Вязаный трикотаж от РОССИЙСКОГО производителя ЖЕНСКОЙ ОДЕЖДЫ</h2>
            <p className="text">Компания «Vinterr Plus» — российский производитель одежды в г. Челябинск.</p>
            <p className="text">Наша компания работает на рынке трикотажной продукции с 2019 года, радуя клиентов качественной продукцией, доступными ценами и великолепным сервисом. Трикотажная фабрика «Vinterr Plus» специализируется на изготовлении и продаже трикотажа в широком ассортименте.</p>
            <p className="text">При производстве изделий мы используем натуральную шерсть, а также синтетические материалы (акрил, полиамид, полиэстер). Наши дизайнеры разрабатывает для Вас стильные фасоны с учетом последних модных тенденций. Ассортимент трикотажных изделий постоянно пополняется за счет регулярного обновления модельного ряда.</p>
        </div>
        <div className="video-about">
            <iframe src="https://vk.com/video_ext.php?oid=-200050952&id=456239018&hash=0a95d8dfd282677e&hd=2"
                width="90%" height="300" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
                frameBorder="0" >
            </iframe>
            <div className="video-about-text">
                <h3 className="video-about-title">ПОЧЕМУ ВЫБИРАЮТ НАС:</h3>
                <div className="video-about-grid">

                    <div className="video-about-text-block">
                        <p className="text">Качественная разнообразных размеров</p>
                        <p className="text">Возможность заказать неразмерными рядами</p>
                        <p className="text">Сезонные акции, рекламная поддержка партнеров</p>
                    </div>
                    <div className="video-about-text-block">
                        <p className="text">Удобный сервис оформления  заказа</p>
                        <p className="text">Идеальная посадка у всех   изделий</p>
                        <p className="text">Уникальные модели, широкий ассортимент</p>
                    </div>
                </div>

            </div>
            <Script>console.log('adasdasd');</Script>
        </div>
    </section>;

};

export default AboutBlock;
