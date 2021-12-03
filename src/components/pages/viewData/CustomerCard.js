import React from 'react';

const CustomerCard = (props) => {
    const customer = props.customer;
    console.log(customer);
    console.log(customer.email)
    console.log("Hi")
    //console.log(customer.timestmp)

    //var obj = JSON.parse(customer.timestmp);
    //console.log(obj);
    if (customer.status === "customer") {
        return (
            <div className="card-container">
                <img src="https://perlmaven.com/img/mongodb-logo.png" alt=""/>
                <div className="desc">
                    sjodjsdo
                    <h3>{customer.idNumber}</h3>
                    <p>{customer.name}</p>
                    <p>{customer.email}</p>
                    <p>{customer.time}</p>

                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                No Data To Show
            </div>
        )
    }
};

export default CustomerCard;