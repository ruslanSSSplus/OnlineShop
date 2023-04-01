import React from 'react';
import classes from '../../styles/Sidebar.module.css'
import {NavLink} from "react-router-dom";


const Sidebar = () => {
    return (
        <section className={classes.sidebar}>
            <div className={classes.title}>
                Categories
            </div>
            <nav>
                <ul className={classes.menu}>
                    <li>
                        <NavLink>
                            Link
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div className={classes.footer}>
<a href='/help' target='_blank' className={classes.link}>
Help
</a>
                <a href='/terms' target='_blank' className={classes.link}>
                    Terms & Conditions
                </a>
            </div>
        </section>
    );
};

export default Sidebar;