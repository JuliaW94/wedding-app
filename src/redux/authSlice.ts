import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface User {
    id?: string
    username?: string
    email?: string
    locale?: "de"|"en"
    roles: string[]
}

interface AuthState {
    authenticated: boolean
    accessToken?: string
    user?: User
}

const initialState: AuthState = {
    authenticated: false,
    user: { roles: [] },
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthenticated(state, action: PayloadAction<AuthState>) {
            return action.payload
        },
        setLogout() {
            return initialState
        },
    },
})

export const { setAuthenticated, setLogout, logout } = authSlice.actions
export default authSlice.reducer
