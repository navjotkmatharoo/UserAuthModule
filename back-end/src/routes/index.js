import { testRoute } from './testRoute';
import { signUpRoute } from './signUpRoute';    
import { logInRoute } from './logInRoute';
import { updateUserInfoRoute } from './UpdateUserInfoRoute';
import { verifyEmailRoute } from './verifyEmailRoute';
import { forgotPasswordRoute } from './forgotPasswordRoute';
import { resetPasswordRoute } from './resetPasswordRoute';
import { getGoogleOauthUrlRoute } from './getGoogleOauthUrlRoute';


export const routes = [
    testRoute,
    signUpRoute,
    logInRoute,
    updateUserInfoRoute,
    verifyEmailRoute,
    forgotPasswordRoute,
    resetPasswordRoute,
    getGoogleOauthUrlRoute
];
