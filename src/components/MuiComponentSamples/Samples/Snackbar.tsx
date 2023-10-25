import CloseIcon from "@mui/icons-material/Close";
import { Alert, Box, IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import SnackbarContent from "@mui/material/SnackbarContent";
import React from "react";

const action = (
  <Button color="secondary" size="small">
    lorem ipsum dolorem
  </Button>
)

export default function SnackbarExample() {
  return (
    <Box sx={{
      maxWidth: 600,
      "& > * + *": {
        mt: 2,
      },
    }}>
      <SnackbarContent message="I love snacks." action={action} />
      <SnackbarContent
        message={
          "I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate."
        }
        action={
          <IconButton size="small" aria-label="close" color="inherit">
            <CloseIcon />
          </IconButton>
        }
      />
      <SnackbarContent
        message="I love candy. I love cookies. I love cupcakes."
        action={action}
      />
      <SnackbarContent
        message={
          "I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate."
        }
        action={action}
      />
      <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert>
    </Box>
  )
}
