import React from 'react';
import ContactContent from './contactContent';
import ContactMap from './contactMap';


const Contact = (): JSX.Element => {

    return <section className="sale-block section">
        <div className="section-title">
            <h2 className='title'>Контакты</h2>
        </div>
        <div className="contact_block">
            <ContactContent />
            <ContactMap />
        </div >
    </section>;

};

export default Contact;
