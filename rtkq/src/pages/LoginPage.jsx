import {Link} from "react-router-dom";
import Login from "../components/Login.jsx";

function LoginPage() {
    return(
        <>LoginPage
            <Login/>
            <Link to={"/register"}>Зарегистрироваться</Link>
        </>
    )

}
export default LoginPage