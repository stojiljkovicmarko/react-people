import React from "react";

import * as utils from "../../utils/helperFunctions";

import "./UserLine.css";

const UserLine = (props) => {
    const { name, email, dob, picture, gender } = props.elem;
    const { first } = name;
    const { thumbnail } = picture;
    const { date } = dob;

    const red = utils.isFemale(gender) ? "red" : "";

    return (
        <div className={`user-line ${red}`} >
            <div className="user-img">
                <img src={thumbnail} alt="" />
            </div>
            <div className="user-info">
                <p className="card-text">Name: {first}</p>
                <p>Email: {utils.hideEmail(email)} </p>
                <p>Date: {utils.formatDate(date)}</p>
            </div>
        </div>
    );
}

export { UserLine };