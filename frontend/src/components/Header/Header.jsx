import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import "./Header.css";
import headerShape from "../../assets/header-shape.svg";
import fetchDataFromBackend from "../../Data/BookData";

export default function Header() {
    const books = fetchDataFromBackend();
    console.log(books);

    return (
        <header>
            <div className="container header-container">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    modules={[Navigation, Pagination]}
                    pagination={{ el: "swiper-pagination", clickable: true }}
                    navigation={{
                        prevEl: ".button-prev-slide",
                        nextEl: ".button-next-slide",
                    }}
                >
                    {books.map(({ title, content, book_image, btnLink }) => {
                        return (
                            <SwiperSlide key={books.id}>
                                <div className="header-wrapper container">
                                    <div className="header-left">
                                        <h1>{title}</h1>
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: content,
                                            }}
                                        ></p>
                                        <Link
                                            className="btn btn-border"
                                            to={btnLink}
                                        >
                                            Learn more
                                        </Link>
                                    </div>
                                    <div className="header-right">
                                        <img src={book_image} alt="Image" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}

                    <div className="slider-button">
                        <div className="button-prev-slide slidebutton">
                            <GoArrowLeft />
                        </div>
                        <div className="button-next-slide slidebutton">
                            <GoArrowRight />
                        </div>
                    </div>

                    {/* Header Pagination */}
                    <div className="container">
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>

                {/* Header Shape */}
                <div className="header-shape">
                    <img src={headerShape} alt="" />
                </div>
            </div>
        </header>
    );
}
