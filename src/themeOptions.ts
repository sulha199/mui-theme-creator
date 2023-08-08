import { ThemeOptions } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  // reference for pallet
  // https://mui.com/material-ui/customization/palette/
  palette: {
    mode: "light",
    // color reference for primary and secondary 
    // https://mui.com/material-ui/customization/color/
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#ffffff',        
    },
    secondary: {
      main: '#9c27b0',
      light: '#ba68c8',
      dark: '#7b1fa2',
      contrastText: '#ffffff',
    },
  },
  /// Add customization for components below
  components: {
    /// https://mui.com/material-ui/customization/typography/
    MuiTypography: {
      styleOverrides: {
        button: {
          fontSize: '2rem'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        sizeLarge: {            
          padding: '3em'
        },
        sizeMedium: {

        },
        sizeSmall: {

        }       
      }
    }
  }
}