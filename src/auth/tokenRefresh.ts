import keycloak from './keycloak'
import {store} from "../redux";
import {setAuthenticated, setLogout} from "../redux/authSlice.ts";

const MIN_VALIDITY = 30 // Sekunden

export const startTokenRefresh = () => {
    // Token wurde erneuert
    keycloak.onAuthRefreshSuccess = () => {
        store.dispatch(
            setAuthenticated({
                ...store.getState().auth,
                accessToken: keycloak.token,
            })
        )
    }

    // Refresh fehlgeschlagen → Logout
    keycloak.onAuthRefreshError = () => {
        console.error('Token refresh failed')
        store.dispatch(setLogout())
        keycloak.logout()
    }

    // Periodischer Check
    setInterval(() => {
        if (!keycloak.authenticated) return

        keycloak
            .updateToken(MIN_VALIDITY)
            .catch(() => {
                store.dispatch(setLogout())
                keycloak.logout()
            })
    }, 10_000)
}
