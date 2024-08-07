import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
import { FootersLinksData } from "../../Data/Data";

export default function Footer() {
    return (
        <footer>
            <div className="container footer-container">
                <div>
                    <h4>About us</h4>
                    <ul className="about-params param-links">
                        {FootersLinksData.Aboutus.map(
                            ({ link, linkname }, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={link}>{linkname}</Link>
                                    </li>
                                );
                            }
                        )}
                    </ul>
                </div>

                <div>
                    <h4>Discover</h4>
                    <ul className="discover-params param-links">
                        {FootersLinksData.Discover.map(
                            ({ link, linkname }, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={link}>{linkname}</Link>
                                    </li>
                                );
                            }
                        )}
                    </ul>
                </div>

                <div>
                    <h4>My Account</h4>
                    <ul className="myAccount-params param-links">
                        {FootersLinksData.Myaccount.map(
                            ({ link, linkname }, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={link}>{linkname}</Link>
                                    </li>
                                );
                            }
                        )}
                    </ul>
                </div>

                <div>
                    <h4>Help</h4>
                    <ul className="help-params param-links">
                        {FootersLinksData.Help.map(
                            ({ link, linkname }, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={link}>{linkname}</Link>
                                    </li>
                                );
                            }
                        )}
                    </ul>
                </div>
            </div>
        </footer>
    );
}
