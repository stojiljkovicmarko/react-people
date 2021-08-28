import React from "react";

import "./UserLine.css";

const UserLine = (props) => {
    const { name, email, dob, picture } = props.elem;
    const { first } = name;
    const { thumbnail } = picture;
    const { date } = dob;



    return (
        <div className="user-line" >
            <div className="user-img">
                <img src={thumbnail} alt="" />
            </div>
            <div className="user-info">
                <p className="card-text">Name: {first}</p>
                <p>Email: {email} </p>
                <p>Date: {date}</p>
            </div>
        </div>
    );
}

export { UserLine };