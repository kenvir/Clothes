import React from 'react';
import classNames from 'classnames/bind';
import style from './Header.module.scss';
import { BsFillTelephoneFill, BsHeart, BsClipboardPlus } from 'react-icons/bs';
import { ImFacebook, ImPinterest } from 'react-icons/im';
import { RiInstagramFill } from 'react-icons/ri';
import { FaTiktok, FaUser } from 'react-icons/fa';
import { MdOutlineExpandMore } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-top')}>
                <div className={cx('container')}>
                    <div className={cx('header-left')}>
                        <div className={cx('email')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faEnvelope} />
                            <span className={cx('mail-address')}>hello.colorlib@gmail.com</span>
                        </div>
                        <div className={cx('phone')}>
                            <BsFillTelephoneFill className={cx('icon')} />
                            <span>+84 34.675.1314</span>
                        </div>
                    </div>
                    <div className={cx('header-right')}>
                        <div className={cx('social')}>
                            <ImFacebook />
                            <RiInstagramFill />
                            <ImPinterest />
                            <FaTiktok />
                        </div>
                        <div className={cx('language')}>
                            <span>English</span>
                        </div>
                        <div className={cx('login')}>
                            <FaUser />
                            <span>
                                <Link to="/login">Login</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('line')}></div>
            <div className={cx('header-bot')}>
                <div className={cx('inner-header')}>
                    <div className={cx('logo')}>
                        <a href="./">
                            <img src="https://preview.colorlib.com/theme/fashi/img/logo.png" alt="" />
                        </a>
                    </div>
                    <div className={cx('search')}>
                        <div className={cx('advanced-search')}>
                            <button type="button" className={cx('category-btn')}>
                                <span>All Categories</span>
                                <MdOutlineExpandMore />
                            </button>
                            <form action="#" className={cx('input-group')}>
                                <input type="text" placeholder="What do you need?" />
                                <button type="button">
                                    <BiSearch className={cx('btn-search')} />
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className={cx('cart')}>
                        <div className={cx('heart')}>
                            <BsHeart />
                            <span className={cx('cart-number')}>
                                <div>1</div>
                            </span>
                        </div>
                        <div className={cx('cart-icon')}>
                            <BsClipboardPlus />
                            <span className={cx('cart-number')}>
                                <div>3</div>
                            </span>
                        </div>
                        <div className={cx('price')}>$150.00</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
