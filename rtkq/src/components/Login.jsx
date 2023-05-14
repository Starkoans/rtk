import {Form} from "./Form.jsx";
import {useDispatch, useSelector} from "react-redux";
import {setUser} from "../store/user/user.slice.js";
import {getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useAuth} from "../hooks/useAuth.js";
import { useNavigate } from "react-router-dom";
import {useEffect} from "react";


function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = (email, password)=>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user})=> {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    token: user.accessToken,
                    id: user.uid
                }));
                navigate("/");
            })
            .catch((error) => console.log(error))

    }
    return(
        <div>
            <Form formTitle="Login" handleSubmit={handleLogin}/>
        </div>

    )

}
export default Login