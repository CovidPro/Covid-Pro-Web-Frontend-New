import React, { useContext } from 'react';
import {Link, useHistory} from 'react-router-dom';
import UserContext from "../../context/userContext";

function AuthOptions () {
    const { userData, setUserData } = useContext(UserContext);
    const history = useHistory();

    const register = () => history.push("/register");
    const login = () => history.push("/login");
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        })
        localStorage.setItem("auth-token","");
    };

    return (
        <nav className="auth-options">
            {userData.user ? (
<div>
                <button onClick={logout}
                        className={
                            "text-xs uppercase py-3 font-bold block items-center" +
                            (window.location.href.indexOf("/customerlist") !== -1
                                ? "text-lightBlue-500 hover:text-lightBlue-600"
                                : "text-blueGray-700 hover:text-blueGray-500")
                        }
                >

                    <i
                        className={
                            "fas fa-map-marked mr-2 text-sm " +
                            (window.location.href.indexOf("/dailyreport") !== -1
                                ? "opacity-75"
                                : "text-blueGray-300")
                        }
                    ></i>{" "}
                    Logout

                </button>
</div>


            ) : (
                <>
                <button className="btn btn-primary mr-2" onClick={register}>Sign Up</button>
                <button className="btn btn-primary mr-2" onClick={login}>Login</button>
                </>
            )}
        </nav>
    )
}

export default AuthOptions;