import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import GoogleSignInBtn from "../Assets/img/Google-SignIn-Btn.webp";

import{ auth } from "./firebase";

function SignInwithGoogle () {

    function googleLogin() {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth,provider).then(async(result) => {
            console.log(result);
        }).catch((error) => {
            console.error("Error during Google sign-in:", error.message);
        });
    }
    return (
        <div>
            <p className=""> </p>
            <div style={{
                display: "flex",
                justifyContent: "center",
                cursor:"pointer",

            }} onClick={googleLogin}>
            <img src={GoogleSignInBtn} alt="Sign in with Google" width="50%" />
            </div>
        </div>
    )
}

export default SignInwithGoogle;