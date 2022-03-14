import React from 'react';


const ContactContent = (): JSX.Element => {

    return <div className="contact_block__content">

        <div className="contact_block__content__block">
            <h5 className='contact_block__content__title'>Адрес шоурума</h5>
            <p className='contact_block__content__text'>г. Челябинск, ул. Тополиная, 11</p>
        </div>

        <div className="contact_block__content__block">
            <h5 className='contact_block__content__title'>Юридический адрес</h5>
            <p className='contact_block__content__text'>г. Челябинск, ул. Братьев Кашириных, 124, оф. 25/1</p>
        </div>
        <div className="contact_block__content__block">
            <h5 className='contact_block__content__title'>Контакты</h5>
            <a href='mailto:info@vinterrplus.ru'><p className='contact_block__content__text'>info@vinterrplus.ru</p></a>
            <a href='tel:89227142991'><p className='contact_block__content__text'>+7 (922) 714-29-91</p></a>
            <a href='tel:89995833565'><p className='contact_block__content__text'>+7 (999) 583-35-65</p></a>
        </div>
        <div className="contact_block__content__block">
            <h5 className='contact_block__content__title'>Социальные сети</h5>
            <a href='https://vk.com/vinterrplus' target="_blank"> <p className='contact_block__content__text'>Vk</p></a>
            <a href='https://www.instagram.com/vinterr_plus/' target="_blank"><p className='contact_block__content__text'>Instagram</p></a>
        </div >

    </div >;

};

export default ContactContent;
