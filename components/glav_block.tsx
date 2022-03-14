import { motion } from 'framer-motion';
import Link from "next/link";


const GlavBlock = (): JSX.Element => {

    return <>
        <div className="glav_block ">
            <motion.div className="glav_block_text"
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
            >
                <h2 className="glav_block_text_1">Побалуйте себя качеством этой весной</h2>
                <h3 className="glav_block_tex_2">Новые сочные оттенки, натуральные составы по доступным ценам.</h3>
                <Link href="/catalog" ><a className="btnLink">Перейти в каталог</a></Link>
            </motion.div>
        </div>
    </>;

};

export default GlavBlock;