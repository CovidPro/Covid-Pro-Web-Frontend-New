import React from 'react';
import axios from "axios";

const PositiveCard = (props) => {
    const staff = props.customer;
    console.log(staff);
    console.log(staff._id)
    /*const handleClick = () => {
        axios.delete(`http://localhost:8080/api/customers/${staff.id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }*/
    console.log(staff.notify)
    console.log("Hi")

    const sendNotification = () => {
        console.log("Hi Notification")
        /*fetch('http://localhost:5000/sendNotification', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: staff.email,
                name: staff.name,
                message: "Your account has been approved"
            })
        })*/

        axios
            .put('http://localhost:5000/sendNotification', {
                id: staff._id,
                notify: 1,
            })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    function Reject() {
        // post request to reject the account
        /*fetch('http://localhost:5000/reject', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: staff.email,
                name: staff.name,
                message: "Your account has been rejected"
            })
        })*/

        axios
            .put('http://localhost:5000/sendNotification', {
                id: staff._id,
                notify: 2,
            })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    function handleClick() {
        console.log("Hi")
        axios
            .post('http://localhost:5000/customers/msg', {
                id: staff._id,
                msg: "Your account has been approved",
                msg2: "Your account has been rejected"
            })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    //notify
    //0 - not read by owner
    //1 - notifications already send / or in process
    //2 - rejected by owner

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
                    <button className="btn btn-outline-warning float-right" onClick={sendNotification}>Send Notification</button>
                    <button className="btn btn-outline-warning float-right" onClick={Reject}>Reject</button>
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

