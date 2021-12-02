import React, {useState, useContext} from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/userContext";
import ErrorNotice from "../../components/misc/ErrorNotice";
import IndexNavbar from "../Navbars/IndexNavbar";

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const {setUserData} = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        try {
            const loginUser = {email, password};
            const loginResponse = await axios.post("http://localhost:5000/users/login", loginUser);
            setUserData({
                token: loginResponse.data.token,
                user: loginResponse.data.user
            });
            localStorage.setItem("auth-token", loginResponse.data.token);
            history.push("/");
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg)
        }

    };

    return (

        <div className="login">
            <IndexNavbar fixed/>
            <section className="header relative pt-0 items-center flex h-screen max-h-860-px">
                <div className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"/>
                <div className="container mx-auto px-4 h-full">

                    <div className="flex content-center items-center justify-center h-full">
                        <div className="w-full lg:w-4/12 px-4">
                            {/*<div className=" flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md">*/}

                            <div
                                className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">


                                <div className="rounded-t mb-0 px-6 py-6">


                                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                        <div className="text-center mb-3">
                                            <h6 className=" text-xl font-bold">Login for Shop</h6>
                                        </div>
                                        {error &&
                                        <ErrorNotice message={error} clearError={() => setError(undefined)}/>}

                                        <div className="mt-10">
                                            <form onSubmit={submit}>
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        Email
                                                    </label>
                                                    <input type="email" id="email"
                                                           className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                           onChange={e => setEmail(e.target.value)}/>
                                                </div>
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        Password:
                                                    </label>
                                                    <input type="password" id="password"
                                                           className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                           onChange={e => setPassword(e.target.value)}/>
                                                </div>
                                                <div className="text-center mt-6">
                                                    <button type="submit"
                                                            value="Login"
                                                            onClick={submit}
                                                            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                                    >Login
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </section>

        </div>
);
}

export default Login;