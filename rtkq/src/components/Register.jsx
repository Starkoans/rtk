import {Form} from "./Form.jsx";
import {useDispatch} from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
function Register(){

    const dispatch = useDispatch();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        console.log(auth);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential)=> console.log(userCredential))
            .catch((error) => console.log(error))
    }
        // .then(console.log)
        // .catch(console.error)

    return(
        <Form formTitle="Register" handleSubmit={handleRegister}/>
    )


}
export default Register