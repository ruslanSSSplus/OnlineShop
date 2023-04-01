import React from 'react';
import classes from '../../styles/Footer.module.css'
import {Link} from "react-router-dom";
import {Routes} from "../../Utils/routes";

import logo from '../../images/logo.svg'



const Footer = () => (
        <section className={classes.footer}>
            <div className={classes.logo}>
                <Link to={Routes.Home}>
                    <img src={logo}/>
                </Link>
            </div>
            <div className={classes.rights}>
                Developed by True SSS Ghoul
            </div>
            <div className={classes.socials}>
                <a href={'https://vk.com/lgbtvoin'}
                target='_blank'
                rel='noreferrer'>
                    <svg className='icon'>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`}/>
                    </svg>
                </a>
            </div>
        </section>
    );

export default Footer;