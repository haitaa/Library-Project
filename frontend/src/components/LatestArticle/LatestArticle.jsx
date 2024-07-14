import React from "react";
import { Link } from "react-router-dom";

import TitleTypeOne from "../../UI/TitleTypeOne/TitleTypeOne";
import { lettestArticleData } from "../../Data/Data";
import "./LatestArticle.css";

import { ImFacebook } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";

export default function LatestArticle() {
    return (
        <section className="latestArticle">
            <div className="container latest-article-container">
                <TitleTypeOne
                    Title={"Latest Articles"}
                    TitleTop={"Read our articles"}
                />

                <div className="latest-article-content">
                    {lettestArticleData.map(
                        (
                            {
                                title,
                                image,
                                titLink,
                                date,
                                inspiration,
                                fbLink,
                                instLink,
                                twitaLink,
                            },
                            index
                        ) => {
                            return (
                                <article className="latest-article">
                                    <div className="article-image">
                                        <img src={image} alt="" />
                                    </div>
                                    <div className="article-info">
                                        <h5>{date}</h5>
                                        <Link to={titLink}>
                                            <h3>{title}</h3>
                                        </Link>
                                    </div>
                                    <div className="latest-article-social">
                                        <p>{inspiration}</p>
                                        <div className="article-social">
                                            <a href={fbLink}>
                                                <ImFacebook />
                                            </a>
                                            <a href={instLink}>
                                                <FiInstagram />
                                            </a>
                                            <a href={twitaLink}>
                                                <RiTwitterXLine />
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            );
                        }
                    )}
                </div>
                <Link to={"*"} className="btn btn-border">
                    Read all articles
                    <BsArrowRight />
                </Link>
            </div>
        </section>
    );
}
