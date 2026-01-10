import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    url: "http://localhost:8082/",
    realm: "DemoRealm",
    clientId: "react-app",
});

export const initKeycloak = () =>
    keycloak.init({
        onLoad: 'login-required',
        checkLoginIframe: false,
    })


export default keycloak;