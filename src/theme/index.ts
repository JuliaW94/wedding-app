import { createTheme } from '@mui/material/styles'

export const weddingTheme = createTheme({
    palette: {
        mode: 'light',

        background: {
            default: '#F8E5D7',
            paper: '#F8E5D7',
        },

        primary: {
            main: '#FF5659',
            dark: '#E64548',
            contrastText: '#FFFFFF',
        },

        secondary: {
            main: '#FFFFFF',
        },

        text: {
            primary: '#FF5659',
            secondary: 'rgba(255,86,89,0.75)',
        },

        divider: '#FF5659',
    },

    shape: {
        borderRadius: 0,
    },

    typography: {
        fontFamily: [
            '"Cormorant Garamond"',
            'serif',
        ].join(','),

        h1: {
            fontSize: '5rem',
            fontWeight: 400,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            lineHeight: 1.1,
        },
        h2: {
            fontSize: '3.2rem',
            fontWeight: 300,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
        },
        h3: {
            fontSize: '2rem',
            fontWeight: 400,
            letterSpacing: '0.12em',
        },

        body1: {
            fontSize: '1.05rem',
            lineHeight: 1.9,
            fontWeight: 400,
        },
        body2: {
            fontSize: '1',
            lineHeight: 1.8,
        },

        button: {
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            fontSize: '1.3rem',
            fontWeight: 500,
        },
    },

    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: '#F8E5D7',
                },
            },
        },

        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    borderBottom: '1px solid #FF5659',
                    color: '#FF5659',
                },
            },
        },

        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: '#FF5659',
                    height: 1,
                },
            },
        },

        MuiTab: {
            styleOverrides: {
                root: {
                    fontSize: '1.2rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    minWidth: 80,
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: "floralwhite"
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                    border: '1px solid #FF5659',
                    color: '#FF5659',
                    backgroundColor: 'transparent',
                    padding: '10px 30px',
                },
                outlined: {
                    '&:hover': {
                        backgroundColor: '#FF5659',
                        color: '#FFFFFF',
                    },
                },
                text: {
                    border: 'none',
                    '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.4)',
                    },
                },
            },
        },

        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: '#FF5659',
                },
            },
        },

        MuiContainer: {
            styleOverrides: {
                maxWidthMd: 2000,
                root: {
                },
            },
        },
    },
})