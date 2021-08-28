import React from "react";

import "./Header.css";

const Header = ({ isGridView, changeView, refreshUserList, searchHandler }) => {
    let viewIcon;
    if (isGridView) {
        viewIcon = "fa fa-bars";
    } else {
        viewIcon = "fa fa-th";
    }

    return (
        <div className="bg-light mb-5">
            <div className="header">

                <div className="p-0 mb-3 d-flex justify-content-between">
                    <div>
                        <p className="display-4 text-success"> User List </p>
                    </div>
                    <div className="p-3 d-flex align-items-center">
                        <button className="btn btn-outline-success mr-3"> About </button>
                        <button className="btn btn-outline-success mr-3" onClick={refreshUserList}> <i className="fa fa-refresh"></i> </button>
                        <button className="btn btn-outline-success" onClick={changeView}> <i className={viewIcon}></i> </button>
                    </div>
                </div>
                <input className="form-control mr-sm-2" type="search" placeholder="Search for users" aria-label="Search" onChange={searchHandler} />


            </div>
        </div>
    );
}

export { Header };