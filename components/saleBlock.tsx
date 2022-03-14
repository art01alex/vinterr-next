import ProductBlock from './productBlock';

const SaleBlock = (): JSX.Element => {

    return <section className="sale-block section">
        <div className="section-title">
            <h2 className='title'>РАСПРОДАЖА СТАРОЙ <br /> КОЛЛЕКЦИИ</h2>
        </div>
        <div className="sale-block-cart">
            <ProductBlock />
            <ProductBlock />
            <ProductBlock />
            <ProductBlock />
            <ProductBlock />

        </div>
    </section>;

};

export default SaleBlock;