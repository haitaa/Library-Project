import React from "react";
import { Link } from "react-router-dom";

import "./BestSellingBook.css";
import TitleTypeTwo from "../../UI/TitleTypeTwo/TitleTypeTwo";
import TreeShape from "../../assets/treeShape.png";
import { sellingBooksData } from "../../Data/Data";
import { BsArrowRight } from "react-icons/bs";

export default function BestSellingBook() {
    return (
        <section className="BestSellingBook">
            <div className="treeShape">
                <img src={TreeShape} alt="" />
            </div>

            {sellingBooksData.map(
                ({
                    img,
                    infoTitle,
                    infoTitleTop,
                    desc,
                    price,
                    shopbtnLink,
                }) => {
                    return (
                        <div className="container bestselling-container">
                            <div className="selling-book-left">
                                <img src={img} alt="" />
                            </div>
                            <div className="selling-book-right">
                                <TitleTypeTwo
                                    Title={"Best Selling Book"}
                                    ClassName={"sellingBookTitle"}
                                />
                                <div>
                                    <small>{infoTitleTop}</small>
                                </div>
                                <h3>{infoTitle}</h3>
                                <p>{desc}</p>
                                <h5>
                                    <span>{price}</span>
                                </h5>
                                <Link to={shopbtnLink} className="btn">
                                    <small>Shop it now</small>
                                    <BsArrowRight />
                                </Link>
                            </div>
                        </div>
                    );
                }
            )}
        </section>
    );
}
