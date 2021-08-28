import React from "react";

import "./UserCard.css";

const UserCard = (props) => {
    //console.log("ovo je props svakog elem:", props.elem);
    const { name, email, dob, picture } = props.elem;
    const { first } = name;
    const { large } = picture;
    const { date } = dob;

    const hideEmail = (email) => {
        let beforeMonkey = email.split("@")[0];
        let firstPartBeforeMonkey = beforeMonkey.slice(0, 3) + "...";
        let secondPartBeforeMonkey = beforeMonkey.slice(beforeMonkey.length - 2, beforeMonkey.lenght);
        let afterMonkey = email.split("@")[1];
        return (firstPartBeforeMonkey + secondPartBeforeMonkey + "@" + afterMonkey);
    }

    const ordinalNumber = (day) => {
        switch (day) {
            case 1:
                return day + "st";
            case 2:
                return day + "nd";
            case 3:
                return day + "rd";
            default:
                return day + "th";
        }

    }

    const formatDate = (date) => {
        let dateObj = new Date(date);
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        let day = dateObj.getDate();
        let month = dateObj.getMonth();
        let year = dateObj.getYear();
        return (monthNames[month] + " " + ordinalNumber(day) + " " + year);
    }

    return (
        <div className="card bg-light col-4 pt-2 mb-2" >
            <img className="card-img" src={large} alt="" />
            <div className="card-body">
                <p className="card-text">Name: {first}</p>
                <p>Email: {hideEmail(email)} </p>
                <p>Date: {formatDate(date)}</p>
            </div>
        </div>
    );
};

export { UserCard };