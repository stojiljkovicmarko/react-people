import React from "react";

import * as utils from "../../utils/helperFunctions";

import "./UserCard.css";

const UserCard = (props) => {
    //console.log("ovo je props svakog elem:", props.elem);
    const { name, email, dob, picture, gender } = props.elem;
    const { first } = name;
    const { large } = picture;
    const { date } = dob;

    const red = utils.isFemale(gender) ? "red" : "";

    return (
        <div className={`card ${red} col-4 pt-2 mb-2 `}>
            <img className="card-img" src={large} alt="" />
            <div className="card-body">
                <p className="card-text">Name: {first}</p>
                <p>Email: {utils.hideEmail(email)} </p>
                <p>Date: {utils.formatDate(date)}</p>
            </div>
        </div>
    );
};

export { UserCard };