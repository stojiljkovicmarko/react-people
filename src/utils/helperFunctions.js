const isFemale = (gender) => {
    if (gender === "female")
        return true;
    return false
}

const hideEmail = (email) => {
    let [beforeMonkey, afterMonkey] = email.split("@");
    let firstPartBeforeMonkey = beforeMonkey.slice(0, 3) + "...";
    let secondPartBeforeMonkey = beforeMonkey.slice(beforeMonkey.length - 2, beforeMonkey.lenght);
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

export { isFemale, hideEmail, formatDate };