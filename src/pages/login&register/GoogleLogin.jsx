import React, {useContext} from 'react';
import AuthContext from "../../auth/AuthContext.jsx";

const GoogleLogin = () => {
    const {createUserWithGoogle} = useContext(AuthContext);
    const handleSignIn = () => {
        createUserWithGoogle().then(result =>{
            console.log(result.user)
        })
            .catch(err => {
                console.log(err.code)
            })
    }
    return (
        <div className={"p-4"}>
            <div className={"divider"}>OR</div>
            <button onClick={handleSignIn} className={"btn btn-block"}>Google</button>
        </div>
    );
};

export default GoogleLogin;