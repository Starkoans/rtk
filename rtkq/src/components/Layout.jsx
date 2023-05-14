import {Link, Outlet} from "react-router-dom";
import styles from "./Layout.module.css"
import {useAuth} from "../hooks/useAuth.js";
import {useDispatch} from "react-redux";
import {removeUser} from "../store/user/user.slice.js";
function Layout() {
    const user = useAuth();
    const dispatch = useDispatch();
    const handleLogOut = ()=>{
        dispatch(removeUser);
    }

    return( <div>

        <header className={styles.header}>
            <Link  to={"/"} >Главная</Link>
            {user.isAuth? <Link to={"/login"} onClick={handleLogOut}>Выйти</Link> : <Link to={"/login"} >Войти</Link>}

        </header>

        <Outlet></Outlet>


        <footer >
             2023
        </footer>

    </div>);

}
export default Layout