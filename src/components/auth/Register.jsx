import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/userContext";
import ErrorNotice from "../../components/misc/ErrorNotice";

function Register () {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [shopName, setShopName] = useState();
    const [shopOwner, setShopOwner] = useState();
    const [shopAddress, setShopAddress] = useState();
    const [contactNumber, setContactNumber] = useState();;
    const [error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();

        try{
            const newUser = {email, password, passwordCheck, shopName, shopOwner, shopAddress, contactNumber};
            await axios.post("http://localhost:5000/users/register", newUser);
            const loginResponse = await axios.post("http://localhost:5000/users/login", {
                email, password
            });
            setUserData({
                token: loginResponse.data.token,
                user: loginResponse.data.user
            });
            localStorage.setItem("auth-token", loginResponse.data.token);
            history.push("/");
        } catch(err) {
            err.response.data.msg && setError(err.response.data.msg)
        }
        
    };
   
    return ( 
        <div className="register">
            <h2>Register</h2><br/>
            {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}<br/>
            <form onSubmit={submit}>

                <label>Email: </label>
                <input type="email" id="email" onChange={e => setEmail(e.target.value)}/><br/><br/>

                <label>Password: </label>
                <input type="password" id="password" onChange={e => setPassword(e.target.value)}/>
                <input type="password" placeholder="Confirm password" onChange={e => setPasswordCheck(e.target.value)}/><br/><br/>

                <label>Shop name:  </label>
                <input type="text" id="shop-name" onChange={e => setShopName(e.target.value)}/><br/><br/>

                <label>Shop owner: </label>
                <input type="text" id="shop-owner" onChange={e => setShopOwner(e.target.value)}/><br/><br/>

                <label>Shop address: </label>
                <input type="text" id="shop-address" onChange={e => setShopAddress(e.target.value)}/><br/><br/>

                <label>Contact number: </label>
                <input type="text" id="contact-number" onChange={e => setContactNumber(e.target.value)}/><br/><br/>

                <input type="submit" value="Register" className="btn btn-primary" /><br/><br/>
            </form>
        </div>
        );
}

export default Register;