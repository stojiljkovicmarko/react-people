import React, { Fragment } from "react";

//import { users } from "../../data/user-list";
import { UserCard } from "../UserCard/UserCard.jsx";
import { UserLine } from "../UserLine/UserLine.jsx"

import "./UserList.css";

const UserList = ({ listOfUsers, isGridView, searchTerm, searchHandler }) => {
    //console.log(listOfUsers);

    const Component = isGridView ? UserCard : UserLine;

    return (
        <Fragment>
            <input className="form-control input-field" type="search" placeholder="Search for users" aria-label="Search" onChange={searchHandler} />
            <div className="row user-list gap-2">
                {/* users.result.map */}
                {listOfUsers.filter((elem) => {
                    if (searchTerm === "") {
                        return elem;
                    } else if (elem.name.first.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return elem;
                    }
                }).map((elem, index) => <Component className="card user-card" elem={elem} key={index} />)}
            </div>
        </Fragment>
    );
}

export { UserList };

