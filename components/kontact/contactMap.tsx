import React from 'react';


const ContactMap = (): JSX.Element => {

    return <div style={{ position: 'relative', overflow: 'hidden' }}>
        <a href="https://yandex.ru/maps/org/vinterr_plyus/212157806958/?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', position: 'absolute', top: '0px' }}>Винтерр Плюс</a>
        <a href="https://yandex.ru/maps/56/chelyabinsk/category/clothing_store/184107943/?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', position: 'absolute', top: "14px" }}>Магазин одежды в Челябинске</a>
        <a href="https://yandex.ru/maps/56/chelyabinsk/category/knitwear/184108047/?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', position: 'absolute', top: '28px' }}>Трикотаж, трикотажные изделия в Челябинске</a>
        <iframe src="https://yandex.ru/map-widget/v1/-/CCUBY6v6GB" width="100%" height="100%" style={{ position: 'relative' }}></iframe>
    </div>;

};

export default ContactMap;
