import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from './api'
import { REFRESH_TOKEN, ACCESS_TOKEN } from "./constants";
import { useState } from "react";


function ProtectedRoute(children) {
    const [isAuthorised, setIsAuthorised] = useState(null)


    const refreshToken = async() => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN)
        try {
            const res = await api.post("/api/token/refresh/", {refresh: refreshToken,});
        
        } catch (error){
            console.log(error)
            setIsAuthorised(false)
        }
        
    }
}
