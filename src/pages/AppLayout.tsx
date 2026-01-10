import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Container,
    Tab, Tabs,
} from '@mui/material'
import {Link, Outlet, useRouterState} from '@tanstack/react-router'
import LogoutButton from "../components/LogoutButton.tsx";

export default function AppLayout() {
    const pathname = useRouterState({
        select: (s) => s.location.pathname,
    })
    return (
        <>
            <AppBar
                position="sticky"
                sx={{
                    backgroundColor: 'background.paper',
                    color: 'text.primary',
                    borderBottom: '1px solid rgba(0,0,0,0.05)',
                }}>
                <Toolbar>
                    <Tabs
                        value={pathname}
                        textColor="inherit"
                        indicatorColor="primary"
                    >
                        <Tab
                            label="Home"
                            value="/"
                            component={Link}
                            to="/"
                        />

                        <Tab
                            label="Impfung"
                            value="/vaccination"
                            component={Link}
                            to="/vaccination"
                        />
                        <Tab
                            label="Visum"
                            value="/visa"
                            component={Link}
                            to="/visa"
                        />
                    </Tabs>
                    <Box sx={{ flexGrow: 1 }} />
                    <LogoutButton
                        variant="outlined"
                        color="secondary"
                        sx={{
                            ml: 2,
                            borderRadius: 999,
                        }}
                    />
                </Toolbar>
            </AppBar>

            {/* Abstand unter AppBar */}
            <Box sx={{ mt: 4 }}>
                <Container maxWidth={"xl"}>
                    <Outlet />
                </Container>
            </Box>
        </>
    )
}
