import React from 'react';

const ViewDataCard = (props) => {
    const staff = props.customer;
    console.log(staff);
    console.log(props.date)
    console.log("Hi")
    // today 12.00 am date
    const today = new Date();
    const todayDate = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();
    const todayHour = today.getHours();


    if (staff.positiveDate < props.date) {
        return (
            <div className="card-container">
                <img src="https://perlmaven.com/img/mongodb-logo.png" alt=""/>
                <div className="desc">
                    <h3>{staff.idNumber}</h3>
                    <p>{staff.name}</p>
                    <p>{staff.email}</p>
                    <p>{staff.time}</p>
                    <p>{staff.positiveDate}</p>
                    <p>{props.date}</p>

                </div>
            </div>
        )
    }else {
        return (
            <div>
            </div>
        )
    }
};

export default ViewDataCard;