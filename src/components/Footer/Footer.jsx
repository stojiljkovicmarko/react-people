import React from "react";

import "./Footer.css";

const Footer = ({ lastUpdate }) => {



    var timeSince = function(date) {
        if (typeof date !== 'object' || typeof date === "string") {
          date = new Date(date);
        }
      
        var seconds = Math.floor((new Date() - date) / 1000);
        var intervalType;
      
        var interval = Math.floor(seconds / 31536000);
        if (interval >= 1) {
          intervalType = 'year';
        } else {
          interval = Math.floor(seconds / 2592000);
          if (interval >= 1) {
            intervalType = 'month';
          } else {
            interval = Math.floor(seconds / 86400);
            if (interval >= 1) {
              intervalType = 'day';
            } else {
              interval = Math.floor(seconds / 3600);
              if (interval >= 1) {
                intervalType = "hour";
              } else {
                interval = Math.floor(seconds / 60);
                if (interval >= 1) {
                  intervalType = "minute";
                } else {
                  interval = seconds;
                  intervalType = "second";
                }
              }
            }
          }
        }
      
        if (interval > 1 || interval === 0) {
          intervalType += 's';
        }
      
        return interval + ' ' + intervalType;
      };

    const datum = timeSince(lastUpdate);

    function sinceLastUpdate() {
        const newDate = parseInt(datum);
        if(newDate < 5) {
            return "few moments"
        } 
        return datum;
    }

    return(
        <div className="footer mt-2 p-4 d-flex justify-content-between">
            <div className="footer-p"> &#169; BitAcademy </div>
            <div> Last update: {sinceLastUpdate()} ago </div>
        </div>
    );
}

export { Footer }; 