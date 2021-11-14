import React, {createContext, useEffect, useState} from "react";
import axios from "axios";
import {useCookies} from "react-cookie";

export const UserContext = createContext(true)

export const UserProvider = (props) => {
    const [logged_in, set_set_logged_in] = useState(false)
    const [token, set_token] = useState(null)
    const [cookies, setCookie, removeCookie] = useCookies()

    const API_URL = process.env.REACT_APP_API_URL

    const check_token = () => {
        if(cookies.token){
            set_token(cookies.token)
            set_set_logged_in(true)
        }
    }

    const _store_token = (value) => {
        set_token(value)
        setCookie("token", value, {path:"/", sameSite:"strict", maxAge:86400})
        set_set_logged_in(true)
    }
    
    const _remove_token = () => {
        removeCookie("token", {path: "/"})
        set_token(null)
        set_set_logged_in(false)
    }
    
    const log_in_user = async (email, password) => {
        await axios({
            method: "post",
            url: `${API_URL}/api/auth/login/`,
            data:{
                email: email,
                password: password
            }
        })
            .then(res => _store_token(res.data.key))
            .catch(error => console.log(error.response.status))
    }

    const logout_user = async () => {
        await axios({
            method: "post",
            url: `${API_URL}/api/auth/logout/`,
            headers:{
                authorization: `token ${token}`
            }
        }).then(res => _remove_token())
    }

    useEffect(()=>{
        check_token()
    }, [])

    return (
        <UserContext.Provider value={{
            log_in_user: log_in_user,
            logout_user: logout_user,
            logged_in: logged_in
        }}>
            {props.children}
        </UserContext.Provider>
    )
}