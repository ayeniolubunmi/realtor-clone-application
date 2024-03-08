import { Outlet, useNavigate } from "react-router-dom";
import UseAuthStatus from "../hooks/UseAuthStatus";
import Spinner from "./Spinner";


export default function PrivateRoute(){
    const navigate = useNavigate()
    const {loggedIn, checkStatus} = UseAuthStatus();
    if(checkStatus){
        return <h3>{Spinner}</h3>
    }
    return loggedIn ? <Outlet /> : navigate("/sign-in")
}