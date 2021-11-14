import React, {createContext, useEffect, useState} from "react";
import axios from "axios";

export const UserContext = createContext(true)

export const UserProvider = (props) => {
    return (
        <UserContext.Provider value={{
        }}>
            {props.children}
        </UserContext.Provider>
    )
}