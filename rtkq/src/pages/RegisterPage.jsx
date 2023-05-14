
import {Link} from "react-router-dom";
import Register from "../components/Register.jsx";


export function RegisterPage() {
    return (
        <div>
            <Register/>
        <Link to={"/login"}>Уже зарегистрированы?</Link>
        </div>
    );
}