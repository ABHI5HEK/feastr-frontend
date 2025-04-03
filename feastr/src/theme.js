import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Chakra theme colors
const chakraTheme = {
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidBg: '#FF6B6B', // Warm Coral
          solidHoverBg: '#E85A5A', // Slightly darker Coral
          solidActiveBg: '#FFFFFF', // Even deeper Coral
          outlinedColor: '#2ECC71', // Fresh Mint Green
          outlinedBorder: '#2ECC71', // Fresh Mint Green border
          light:'#caf7ff',
          white:'#FFFFFF',
        },
        background: '#FAF3E0', // Off-White background
        text: {
          primary: '#2E2E2E', // Dark text for readability
          secondary: '#8D6E63', // Earthy brown
        },
      },
    },
    dark: {
      palette: {
        primary: {
          solidBg: '#F4A261', // Golden Mustard
          solidHoverBg: '#E29655', // Slightly darker Golden
          solidActiveBg: '#D4844C', // Deeper Golden
          outlinedColor: '#2ECC71', 
          outlinedBorder: '#2ECC71', // Fresh Mint Green border
          white:'#FFFFFF',

           light:'#caf7ff'
          // Fresh Mint Green for contrast
        },
        background: '#121212', // Dark background
        text: {
          primary: '#FAF3E0', // Light text for readability
        },
      },
    },
  },
};

// Create MUI theme from the above chakraTheme
const muiTheme = createTheme({
  palette: {
    primary: {
      main: chakraTheme.colorSchemes.light.palette.primary.solidBg,
      dark: chakraTheme.colorSchemes.light.palette.primary.solidHoverBg,
      light: chakraTheme.colorSchemes.light.palette.primary.solidActiveBg,
    },
    secondary: {
      main: chakraTheme.colorSchemes.light.palette.primary.outlinedColor, // Provide a secondary color
    },
    background: {
      default: chakraTheme.colorSchemes.light.palette.background,
    },
    text: {
      primary: chakraTheme.colorSchemes.light.palette.text.primary,
      secondary: chakraTheme.colorSchemes.light.palette.text.secondary,
    },
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: '400',
    },
  },
});

export default responsiveFontSizes(muiTheme);
