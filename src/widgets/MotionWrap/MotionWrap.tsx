import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
    className?: string;
}

const MotionWrap = (
    Component: ({ className }: Props) => JSX.Element,
    className: string
) =>
    function HOC() {
        return (
            <motion.div
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
                className={`${className} app__flex`}
            >
                <Component />
            </motion.div>
        );
    };

export default MotionWrap;
