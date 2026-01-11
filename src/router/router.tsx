import {RootRoute, Route, Router} from '@tanstack/react-router'
import Home from '../pages/Home.tsx'
import Vaccination from '../pages/vaccination/Vaccination.tsx'
import AppLayout from "../pages/AppLayout.tsx";
import Visa from "../pages/Visa.tsx";


const rootRoute = new RootRoute({
    component: () => (<AppLayout/>),
})

const homeRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Home,
})

const vaccinationRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/vaccination',
    component: Vaccination,
})

const visaRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/visa',
    component: Visa,
})


const routeTree = rootRoute.addChildren([homeRoute, vaccinationRoute, visaRoute])


export const router = new Router({ routeTree })