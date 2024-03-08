import { Outlet, useNavigate } from "react-router-dom";
import UseAuthStatus from "../hooks/UseAuthStatus";


export default function PrivateRoute(){
    const navigate = useNavigate()
    const {loggedIn, checkStatus} = UseAuthStatus();
    if(checkStatus){
        return <h3>Loading...</h3>
    }
    return loggedIn ? <Outlet /> : navigate("/sign-in")
}