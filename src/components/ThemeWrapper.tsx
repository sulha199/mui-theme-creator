import Paper from "@mui/material/Paper";
import { StyledEngineProvider, ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/state/types";
import { themeOptions } from "src/themeOptions";
import themeOptionsJson from 'src/theme.json';

interface ThemeWrapperProps {
  children: React.ReactNode | React.ReactNodeArray
}

/**
 *
 * Wraps example content in the dynamically controlled theme
 * set by the theme editor sidebar
 */
const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  // below code is commented out as we use static theme
  // const themeObject = useSelector((state: RootState) => state.themeObject)

  const themeObject = createTheme(Object.keys(themeOptionsJson).length > 0 ? themeOptionsJson :themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themeObject}>
        <ThemeContainer>{children}</ThemeContainer>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

/**
 *
 * CssBa
 *
 */
const ThemeContainer = ({ children }: ThemeWrapperProps) => {
  return (
    <Paper sx={{
      bgcolor: 'background.default',
      width: "100%",
      height: "100%",
    }} elevation={0} square>
      {children}
    </Paper>
  )
}

export default ThemeWrapper
