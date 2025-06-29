import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#76ABAE', // Teal blue
      dark: '#5E898C',
      light: '#8EBEC1',
    },
    secondary: {
      main: '#EEEEEE', // Light gray accent
      dark: '#CCCCCC',
      light: '#F5F5F5',
    },
    background: {
      default: '#222831', // Very dark gray background
      paper: '#31363F', // Dark gray card background
    },
    surface: {
      main: '#31363F',
    },
    text: {
      primary: '#EEEEEE',
      secondary: 'rgba(238, 238, 238, 0.7)',
    },
    divider: 'rgba(238, 238, 238, 0.08)',
    error: {
      main: '#FF6B6B',
    },
    warning: {
      main: '#FFD93D',
    },
    info: {
      main: '#76ABAE',
    },
    success: {
      main: '#76ABAE',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#222831',
          color: '#EEEEEE',
          fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        },
        '*::-webkit-scrollbar': {
          width: '6px',
        },
        '*::-webkit-scrollbar-track': {
          backgroundColor: '#222831',
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: '#76ABAE',
          borderRadius: '3px',
        },
        '*::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#5E898C',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#31363F',
          color: '#EEEEEE',
          border: '1px solid rgba(238, 238, 238, 0.05)',
          backgroundImage: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#31363F',
          color: '#EEEEEE',
          border: '1px solid rgba(238, 238, 238, 0.05)',
          borderRadius: '16px',
          backgroundImage: 'none',
          boxShadow: '0 8px 32px rgba(34, 40, 49, 0.24)',
          '&:hover': {
            border: '1px solid rgba(118, 171, 174, 0.3)',
            transform: 'translateY(-4px)',
            transition: 'all 0.3s ease-in-out',
            boxShadow: '0 12px 40px rgba(34, 40, 49, 0.32)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#222831',
          color: '#EEEEEE',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(238, 238, 238, 0.05)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#222831',
          color: '#EEEEEE',
          border: 'none',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: '#31363F',
          '& .MuiTableCell-head': {
            backgroundColor: '#31363F',
            color: 'rgba(238, 238, 238, 0.7)',
            fontWeight: 600,
            fontSize: '0.875rem',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid rgba(238, 238, 238, 0.05)',
          color: '#EEEEEE',
          padding: '16px',
        },
        head: {
          backgroundColor: '#31363F',
          color: 'rgba(238, 238, 238, 0.7)',
          fontWeight: 600,
          fontSize: '0.875rem',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: '12px',
          padding: '12px 24px',
        },
        contained: {
          background: 'linear-gradient(135deg, #76ABAE 0%, #5E898C 100%)',
          boxShadow: '0 4px 20px rgba(118, 171, 174, 0.3)',
          color: '#EEEEEE',
          '&:hover': {
            background: 'linear-gradient(135deg, #5E898C 0%, #4C6F72 100%)',
            boxShadow: '0 8px 25px rgba(118, 171, 174, 0.4)',
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          borderColor: 'rgba(118, 171, 174, 0.5)',
          color: '#76ABAE',
          '&:hover': {
            borderColor: '#76ABAE',
            backgroundColor: 'rgba(118, 171, 174, 0.1)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#31363F',
            borderRadius: '12px',
            color: '#EEEEEE',
            '& fieldset': {
              borderColor: 'rgba(238, 238, 238, 0.1)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(118, 171, 174, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#76ABAE',
              boxShadow: '0 0 0 2px rgba(118, 171, 174, 0.15)',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'rgba(238, 238, 238, 0.7)',
            '&.Mui-focused': {
              color: '#76ABAE',
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: '#31363F',
          color: '#EEEEEE',
          borderRadius: '12px',
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: '#31363F',
          color: '#EEEEEE',
          border: '1px solid rgba(238, 238, 238, 0.05)',
          borderRadius: '16px',
          boxShadow: '0 12px 40px rgba(34, 40, 49, 0.3)',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: '#EEEEEE',
          padding: '12px 16px',
          '&:hover': {
            backgroundColor: 'rgba(118, 171, 174, 0.1)',
          },
          '&.Mui-selected': {
            backgroundColor: 'rgba(118, 171, 174, 0.15)',
            '&:hover': {
              backgroundColor: 'rgba(118, 171, 174, 0.2)',
            },
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: '#31363F',
          color: '#EEEEEE',
          borderRadius: '20px',
          border: '1px solid rgba(238, 238, 238, 0.05)',
          boxShadow: '0 16px 48px rgba(34, 40, 49, 0.4)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '24px',
          fontWeight: 500,
        },
        filled: {
          '&.MuiChip-colorPrimary': {
            backgroundColor: 'rgba(118, 171, 174, 0.2)',
            color: '#76ABAE',
            border: '1px solid rgba(118, 171, 174, 0.3)',
          },
          '&.MuiChip-colorSecondary': {
            backgroundColor: 'rgba(238, 238, 238, 0.1)',
            color: '#EEEEEE',
            border: '1px solid rgba(238, 238, 238, 0.2)',
          },
          '&.MuiChip-colorSuccess': {
            backgroundColor: 'rgba(118, 171, 174, 0.2)',
            color: '#76ABAE',
            border: '1px solid rgba(118, 171, 174, 0.3)',
          },
          '&.MuiChip-colorWarning': {
            backgroundColor: 'rgba(255, 217, 61, 0.2)',
            color: '#FFD93D',
            border: '1px solid rgba(255, 217, 61, 0.3)',
          },
          '&.MuiChip-colorError': {
            backgroundColor: 'rgba(255, 107, 107, 0.2)',
            color: '#FF6B6B',
            border: '1px solid rgba(255, 107, 107, 0.3)',
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(238, 238, 238, 0.1)',
          borderRadius: '8px',
          height: '8px',
        },
        bar: {
          background: 'linear-gradient(90deg, #76ABAE 0%, #5E898C 100%)',
          borderRadius: '8px',
        },
      },
    },
  },
  typography: {
    fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      color: '#EEEEEE',
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 700,
      color: '#EEEEEE',
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 600,
      color: '#EEEEEE',
      fontSize: '1.75rem',
    },
    h4: {
      fontWeight: 600,
      color: '#EEEEEE',
      fontSize: '1.5rem',
    },
    h5: {
      fontWeight: 600,
      color: '#EEEEEE',
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 600,
      color: '#EEEEEE',
      fontSize: '1.125rem',
    },
    body1: {
      color: '#EEEEEE',
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    body2: {
      color: 'rgba(238, 238, 238, 0.7)',
      fontSize: '0.8125rem',
      lineHeight: 1.4,
    },
    subtitle1: {
      fontWeight: 500,
      color: 'rgba(238, 238, 238, 0.9)',
    },
    subtitle2: {
      fontWeight: 500,
      color: 'rgba(238, 238, 238, 0.7)',
      fontSize: '0.8125rem',
    },
  },
  shape: {
    borderRadius: 12,
  },
});

// Extend the theme interface to include custom colors
declare module '@mui/material/styles' {
  interface Palette {
    surface: {
      main: string;
    };
  }

  interface PaletteOptions {
    surface?: {
      main: string;
    };
  }
}
