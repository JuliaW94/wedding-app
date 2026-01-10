import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import * as React from 'react'
import ReactDOM from "react-dom/client";

import keycloak, {initKeycloak} from "./auth/keycloak.ts";
import {store} from "./redux";
import {setAuthenticated} from "./redux/authSlice.ts";
import {router} from "./router/router.tsx";
import {RouterProvider} from "@tanstack/react-router";
import {Provider} from "react-redux";
import {ThemeProvider} from "@mui/material/styles";
import {weddingTheme} from "./theme";
import {startTokenRefresh} from "./auth/tokenRefresh.ts";
import {CssBaseline} from "@mui/material";
await initKeycloak().then((authenticated) => {
    if (authenticated) {
        store.dispatch(
            setAuthenticated({
                authenticated: true,
                accessToken: keycloak.token,
                user: {
                    id: keycloak.tokenParsed?.sub,
                    username: keycloak.tokenParsed?.preferred_username as string,
                    email: keycloak.tokenParsed?.email as string,
                    locale: keycloak.tokenParsed?.locale as ("de"|"en"),
                    roles: keycloak.realmAccess?.roles ?? []
                }
            })
        )
        startTokenRefresh()
    }


    ReactDOM.createRoot(document.getElementById('root')!).render(
        <React.StrictMode>
            <Provider store={store}>
                <ThemeProvider theme={weddingTheme}>
                    <CssBaseline/>
                    <RouterProvider router={router} />
                </ThemeProvider>
            </Provider>
        </React.StrictMode>
    )
})
