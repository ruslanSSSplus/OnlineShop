import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

import styles from "../../styles/Header.module.css";

import {ROUTES} from "../../Utils/routes";

import LOGO from "../../images/logo.svg";
import AVATAR from "../../images/avatar.jpg";
import {useDispatch, useSelector} from "react-redux";
import {toggleForm} from "../../features/user/userSlice";
import {useGetProductsQuery} from "../../features/api/apiSlice";


const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {currentUser, cart} = useSelector(({user}) => user)
    const [searchValue, setSearchValue] = useState("");

    const [values, setValues] = useState({name: "Guest", avatar: AVATAR})

    const {data, isLoading} = useGetProductsQuery({title: searchValue})

    useEffect(() => {
        if (!currentUser) return

        setValues(currentUser)
    }, [currentUser])
    const handleClick = () => {
        if (!currentUser) {
            dispatch(toggleForm(true))
        } else navigate(ROUTES.Profile)
    }
    const handleSearch = ({target: {value}}) => {
        setSearchValue(value);
    };

    return (<div className={styles.header}>
            <div className={styles.logo}>
                <Link to={ROUTES.Home}>
                    <img src={LOGO} alt="Stuff"/>
                </Link>
            </div>

            <div className={styles.info}>
                <div className={styles.user} onClick={handleClick}>
                    <div
                        className={styles.avatar}
                        style={{backgroundImage: `url(${values.avatar})`}}/>

                    <div className={styles.username}>{values.name}</div>
                </div>

                <form className={styles.form}>
                    <div className={styles.icon}>
                        <svg className="icon">
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`}/>
                        </svg>
                    </div>
                    <div className={styles.input}>
                        <input
                            type="search"
                            name="search"
                            placeholder="Search for anyting..."
                            autoComplete="off"
                            onChange={handleSearch}
                            value={searchValue}
                        />
                    </div>

                    {searchValue && <div className={styles.box}>
                        {isLoading ? 'Loading' : !data.length ? 'No results' : data.map(({title, images, id}) => {
                            return (<Link
                                    onClick={() => setSearchValue('')}
                                    className={styles.item}
                                    to={`/products/${id}`}
                                    key={id}
                                >
                                    <div className={styles.image}
                                         style={{backgroundImage: `url(${images[0]})`}}
                                    />


                                    <div className={styles.title}>
                                        {title}

                                    </div>

                                </Link>)
                        })}

                    </div>}
                </form>

                <div className={styles.account}>
                    <Link to={ROUTES.Home} className={styles.favourites}>
                        <svg className={styles["icon-fav"]}>
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`}/>
                        </svg>
                    </Link>

                    <Link to={ROUTES.Cart} className={styles.cart}>
                        <svg className={styles["icon-cart"]}>
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`}/>
                        </svg>
                        {!!cart.length &&
                            <span className={styles.count}>
                               {cart.length}
                          </span>}
                    </Link>
                </div>
            </div>
        </div>);
};

export default Header;