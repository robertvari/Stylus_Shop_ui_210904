import React, {createContext, useEffect, useState} from "react";
import axios from "axios";

export const UserContext = createContext(true)

export const UserProvider = (props) => {
    const [logged_in, set_set_logged_in] = useState(false)
    const [token, set_token] = useState(null)

    const API_URL = process.env.REACT_APP_API_URL

    const log_in_user = async (email, password) => {
        await axios({
            method: "post",
            url: `${API_URL}/api/auth/login/`,
            data:{
                email: email,
                password: password
            }
        })
            .then(res => console.log(res.data.key))
            .catch(error => console.log(error.response.status))
    }

    return (
        <UserContext.Provider value={{
            log_in_user: log_in_user
        }}>
            {props.children}
        </UserContext.Provider>
    )
}