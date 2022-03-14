import { motion } from 'framer-motion';
import React from 'react';
import { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';

const ButScrollUp = (): JSX.Element => {

    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisiblity] = useState(false);

    useEffect(() => {
        if (pageYOffset > 700) {
            setVisiblity(true);
        } else {
            setVisiblity(false);
        }
    }, [pageYOffset]);

    const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

    if (!visible) {
        return <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
        >
            <div className="scroll_up" onClick={scrollUp}>
                <svg className="scroll_up_svg" viewBox="0 0 392 316" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 306L196 161L384 306" stroke-width="24" />
                    <path d="M8 161L196 16L384 161" stroke-width="24" />
                </svg>
            </div>
        </motion.div>;
    }

    return <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
    >
        <div className="scroll_up" onClick={scrollUp} title="На вверх">
            <svg className="scroll_up_svg" viewBox="0 0 392 316" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 306L196 161L384 306" stroke-width="24" />
                <path d="M8 161L196 16L384 161" stroke-width="24" />
            </svg>
        </div>
    </motion.div>;

};

export default ButScrollUp;
