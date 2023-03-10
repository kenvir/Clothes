/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import classNames from 'classnames/bind';
import style from './HomeBlog.module.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShuffle } from '@fortawesome/free-solid-svg-icons';

import blog1 from '~/assets/imgs/latest-1.jpg';
import blog2 from '~/assets/imgs/latest-2.jpg';
import blog3 from '~/assets/imgs/latest-3.jpg';
import icon1 from "~/assets/imgs/icon-1.png";
import icon2 from "~/assets/imgs/icon-2.png";

import { FaRegComment } from 'react-icons/fa';
import { RiCalendarEventFill } from 'react-icons/ri';

const cx = classNames.bind(style);

function Product() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('section-title')}>
                    <div>From The Blog</div>
                </div>

                <div className={cx('blog-wrapper')}>
                    <div className={cx('single-latest-blog')}>
                        <img src={blog1} alt="blog1" />
                        <div className={cx('latest-text')}>
                            <div className={cx('tag-list')}>
                                <div className={cx('tag-item')}>
                                    <RiCalendarEventFill className={cx('calendar-icon')}></RiCalendarEventFill>
                                    <div>May 4,2019</div>
                                </div>
                                <div className={cx('tag-item')}>
                                    <FaRegComment className={cx('comment-icon')}></FaRegComment>5
                                </div>
                            </div>
                            <a href="#">
                                <h4>The Best Street Style From London Fashion Week</h4>
                            </a>
                            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                        </div>
                    </div>

                    <div className={cx('single-latest-blog')}>
                        <img src={blog2} alt="blog2" />
                        <div className={cx('latest-text')}>
                            <div className={cx('tag-list')}>
                                <div className={cx('tag-item')}>
                                    <RiCalendarEventFill className={cx('calendar-icon')}></RiCalendarEventFill>
                                    <div>May 4,2019</div>
                                </div>
                                <div className={cx('tag-item')}>
                                    <FaRegComment className={cx('comment-icon')}></FaRegComment>5
                                </div>
                            </div>
                            <a href="#">
                                <h4>Vogue's Ultimate Guide To Autumn/Winter 2019 Shoes</h4>
                            </a>
                            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                        </div>
                    </div>

                    <div className={cx('single-latest-blog')}>
                        <img src={blog3} alt="blog3" />
                        <div className={cx('latest-text')}>
                            <div className={cx('tag-list')}>
                                <div className={cx('tag-item')}>
                                    <RiCalendarEventFill className={cx('calendar-icon')}></RiCalendarEventFill>
                                    <div>May 4,2019</div>
                                </div>
                                <div className={cx('tag-item')}>
                                    <FaRegComment className={cx('comment-icon')}></FaRegComment>5
                                </div>
                            </div>
                            <a href="#">
                                <h4>How To Brighten Your Wardrobe With A Dash Of Lime</h4>
                            </a>
                            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                        </div>
                    </div>
                </div>

                <div className={cx("benefit-items")}>
                    <div className={cx("single-benefit")}>
                        <div className={cx("sb-icon")}>
                            <img src={icon1} alt="icon 1" />
                        </div>
                        <div className={cx("sb-text")}>
                            <h6>Free Shipping</h6>
                            <p>For all order over 99$</p>
                        </div>
                    </div>
                    <div className={cx("single-benefit")}>
                        <div className={cx("sb-icon")}>
                            <img src={icon2} alt="icon 2" />
                        </div>
                        <div className={cx("sb-text")}>
                            <h6>Delivery On Time</h6>
                            <p>If good have prolems</p>
                        </div>
                    </div>
                    <div className={cx("single-benefit")}>
                        <div className={cx("sb-icon")}>
                            <img src={icon1} alt="icon 1" />
                        </div>
                        <div className={cx("sb-text")}>
                            <h6>Secure Payment</h6>
                            <p>100% secure payment</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
