import keycloak from './keycloak'
import {store} from "../redux";
import {setLogout} from "../redux/authSlice.ts";

export const logout = () => {
    // Redux leeren
    store.dispatch(setLogout())

    // Keycloak Logout
    keycloak.logout({
        redirectUri: window.location.origin,
    })
}