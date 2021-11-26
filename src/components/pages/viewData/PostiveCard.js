import React from 'react';

const PositiveCard = (props) => {
    const staff = props.customer;
    console.log(staff);
    console.log(staff.email)
    console.log("Hi")

    if (staff.positive === false) {
        return (
            <div className="card-container">
                <img src="https://perlmaven.com/img/mongodb-logo.png" alt=""/>
                <div className="desc">
                    sjodjsdo
                    <h3>{staff.idNumber}</h3>
                    <p>{staff.name}</p>
                    <p>{staff.email}</p>
                    <p>{staff.time}</p>

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

export default PositiveCard;