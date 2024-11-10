import SignIn from "./SignIn"
import Signup from "./Signup"

const LoginSection = () => {
    return (
        <div>
            <div>
                <div>Login</div>
                <div>Register</div>
            </div>
            <div>
                <SignIn />
                <Signup />
            </div>
        </div>
    )
}

export default LoginSection