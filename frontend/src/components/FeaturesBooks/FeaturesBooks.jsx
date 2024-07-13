import React from "react";
import { Link } from "react-router-dom";

import "./FeaturesBooks.css";
import TitleTypeOne from "../../UI/TitleTypeOne/TitleTypeOne";
import { featuredBooksData } from "../../Data/Data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { BsArrowReturnRight } from "react-icons/bs";

export default function FeaturesBooks() {
    return (
        <section className="Featured">
            <div className="container features-book-container">
                <TitleTypeOne
                    TitleTop={"Some quality items"}
                    Title={"Featured Books"}
                />

                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    loop={true}
                    modules={{ Pagination }}
                    pagination={{ el: ".swiper-pagination", clickable: true }}
                >
                    {featuredBooksData.map(
                        (
                            { img, imgLlink, name, nameLink, writer, price },
                            index
                        ) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="featurebook-box">
                                        <Link
                                            to={imgLlink}
                                            className="featurebook"
                                        >
                                            <img src={img} alt="" />
                                        </Link>
                                        <div className="featurebook-info">
                                            <Link to={nameLink}>
                                                <h4>{name}</h4>
                                            </Link>
                                            <div>
                                                <small>{writer}</small>
                                            </div>
                                            <h5>
                                                <span>{price}</span>
                                            </h5>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        }
                    )}
                    <div className="feature-border container"></div>

                    <div className="swiper-pagination"></div>

                    <Link to="*" className="btn feature-btn">
                        View all books. <BsArrowReturnRight />
                    </Link>
                </Swiper>
            </div>
        </section>
    );
}
