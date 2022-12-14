import * as React from "react";
import classes from './Nav.module.css'
import { BsCircleFill, BsXCircleFill } from "react-icons/bs";
import { motion, AnimatePresence, useCycle } from 'framer-motion';
import { Link } from 'react-router-dom';

const openIcon = <BsCircleFill size="30px" />
const closeIcon = <BsXCircleFill size="30px" />

const links = [
    { name: "Home", to: "/", id: 1 },
    { name: "About", to: "/about", id: 2 },
    { name: "Contact", to: "/contact", id: 3 }
];

const itemVariants = {
    closed: {
        opacity: 0,

    },
    open: {
        opacity: 1
    }
};

const sideVariants = {
    closed: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: -1
        }
    },
    open: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: 1
        }
    }
};

const NavBarBtn = {
    key: "NavBarBtn",
    whileHover: { scale: 1.2 },
    whileTap: { scale: 0.8 },
};



export default function NavBar() {
    const [open, cycleOpen] = useCycle(false, true);

    return (
        <main>
            <AnimatePresence>
                {open && (
                    <motion.nav
                        initial={{ y: "-100%" }}
                        animate={{
                            y: 0
                        }}
                        exit={{
                            y: "-100%",
                            transition: { delay: 0.8, duration: 0.3 }
                        }}
                    >
                        <motion.div
                            className={classes.NavBar}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={sideVariants}
                        >
                            <h1>Alejandro Mercado</h1>
                            <ul>
                                {links.map(({ name, to, id }) => (

                                    <CustomLink
                                        to={to}
                                        key={id}
                                    >
                                        <motion.p
                                            whileHover={{ scale: 1.1 }}
                                            variants={itemVariants}
                                            onClick={cycleOpen}
                                        >
                                            {name}
                                        </motion.p>
                                    </CustomLink>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.nav>
                )}
            </AnimatePresence>
            <div className={classes.button}>
                <motion.button {...NavBarBtn} onClick={cycleOpen}>{open ? closeIcon : openIcon}</motion.button>
            </div>
        </main>
    );
}

function CustomLink({ to, children, ...props }) {
    
    return (
        <li>
            <Link
                to={to}
                {...props}
            >
                {children}
            </Link>
        </li>
    )
}