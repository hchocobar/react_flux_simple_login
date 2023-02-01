import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const Login = () => {
    const { actions, store} = useContext(Context);

    return (
        store.isLoggedIn ? <Navigate to="/dashboard"/> : 
        <div className="card-body py-5 px-md-5">
                <div className="form-outline mb-4">
                    <input type="email" id="form2Example1" className="form-control" />
                    <label className="form-label" htmlFor="form2Example1">Email address</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="password" id="form2Example2" className="form-control" />
                    <label className="form-label" htmlFor="form2Example2">Password</label>
                </div>
                <div>
                    <button onClick={() => actions.login()} type="button" className="btn btn-primary btn-block mb-4">Sign in</button>
                </div>
        </div>
    );
};
