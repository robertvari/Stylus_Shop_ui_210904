import React, {createContext, useEffect, useState} from "react";
import axios from "axios";
import {useCookies} from "react-cookie";

export const UserContext = createContext(true)

export const UserProvider = (props) => {
    const [logged_in, set_set_logged_in] = useState(false)
    const [token, set_token] = useState(null)
    const [cookies, setCookie, removeCookie] = useCookies()
    
    const [email, set_email] = useState("")
    const [first_name, set_first_name] = useState("")
    const [last_name, set_last_name] = useState("")
    const [company, set_company] = useState("")
    const [address, set_address] = useState("")
    const [city, set_city] = useState("")
    const [post_code, set_post_code] = useState("")
    const [phone, set_phone] = useState("")
    const [user_id, set_user_id] = useState(null)
    const [profile_url, set_profile_url] = useState("")


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

    const register_user = async (email, password) =>{
        try{
            const result = await axios({
                method: "post",
                url: `${API_URL}/api/auth/registration/`,
                data: {
                    email: email,
                    password1: password,
                    password2: password
                }
            })

            return result.status === 201
        }catch (err){
            return false
        }
    }

    const fetch_profile = () => {
        axios({
            method: "get",
            url: `${API_URL}/api/users/profile/`,
            headers: {
                authorization: `token ${token}`
            }
        }).then(res => {
            let profile_data = res.data.profile
            set_user_id(res.data.user_id)
            set_email(res.data.email)
            set_first_name(res.data.profile.first_name)
            set_last_name(res.data.profile.last_name)
            set_company(res.data.profile.company)
            set_address(res.data.profile.address)
            set_city(res.data.profile.city)
            set_post_code(res.data.profile.post_code)
            set_phone(res.data.profile.phone)
            set_profile_url(res.data.profile.slug)
            }
        )
    }

    useEffect(()=>{
        check_token()
    }, [])

    useEffect(() => {
        if(logged_in){
            fetch_profile()
        }
    }, [logged_in])

    return (
        <UserContext.Provider value={{
            log_in_user: log_in_user,
            logout_user: logout_user,
            register_user: register_user,

            logged_in: logged_in
        }}>
            {props.children}
        </UserContext.Provider>
    )
}