import React from 'react';
import classes from '../../styles/Sidebar.module.css'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import styles from "../../styles/Sidebar.module.css";

const Sidebar = () => {
    const { list } = useSelector(({categories}) => categories)

    return (
        <section className={classes.sidebar}>
            <div className={classes.title}>
                Categories
            </div>
            <nav>
                <ul className={classes.menu}>
                    {list.map(({id, name}) =>(
                        <li key={id}>
                            <NavLink
                                className={({ isActive }) =>
                                    `${styles.link} ${isActive ? styles.active : ""}`
                                }
                                to={`/categories/${id}`}
                            >
                            {name}
                        </NavLink>
                    </li>
                    ))}

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