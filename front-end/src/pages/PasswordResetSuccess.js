import {useHistory} from 'react-router-dom';

export const PasswordResetSuccess=()=> {
    const history= useHistory();

    return (
        <div className="content-container">
            <h1>Success!</h1>
            <p>
                Your Password has been reset, now please login with new password.
            </p>
            <button onClick={()=> history.push('/login')}>Log In</button>
        </div>
    );
}
