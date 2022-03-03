import React from "react";
import { Link } from "react-router-dom";
import tap from '../images/tap.png'
const ButtonMailto = ({ mailto, label }) => {
    return (
        <div className="Mail">
        <Link className="MailTo"
            to='#'
            onClick={(e) => {
                window.location = mailto;
                e.preventDefault();
            }}
        >
           <img src={tap}/> {label}
        </Link></div>
    );
};

export default ButtonMailto;