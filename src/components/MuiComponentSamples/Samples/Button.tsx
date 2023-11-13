import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import SaveIcon from "@mui/icons-material/Save";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { BoxProps } from "@mui/system"
import React from "react"

const groupStyle: BoxProps["sx"] = {
  gap: "4px",
  mb: 2,
  "> *[class]  ": {
    marginLeft: "4px",
  },
}

export default function ButtonsExample() {

  return (
    <div>
      <Typography variant="h6" id="contained-buttons">
        Contained Buttons
      </Typography>
      <Box sx={groupStyle}>
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button>
      </Box>

      <Typography variant="h6" id="text-buttons">
        Text Buttons
      </Typography>
      <Box sx={groupStyle}>
        <Button>Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button disabled>Disabled</Button>
        <Button color="primary" href="#text-buttons">
          Link
        </Button>
      </Box>

      <Typography variant="h6" id="outlined-buttons">
        Outlined Buttons
      </Typography>
      <Box sx={groupStyle}>
        <Button variant="outlined">Default</Button>
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="outlined" color="primary" href="#outlined-buttons">
          Link
        </Button>
      </Box>

      <Typography variant="h6" id="buttons-with-icons">
        Buttons with icons and label
      </Typography>
      <Box sx={groupStyle}>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
        <Button variant="contained" startIcon={<CloudUploadIcon />}>
          Upload
        </Button>
        <Button
          variant="contained"
          disabled
          color="secondary"
          startIcon={<KeyboardVoiceIcon />}
        >
          Talk
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </Box>

      <Typography variant="h6" id="buttons-with-icons">
        Buttons size
      </Typography>
      <Box sx={groupStyle}>
        <Button variant="contained">Default</Button>
        <Button size="small" variant="contained" >Small</Button>
        <Button size="medium" variant="contained">Medium</Button>
        <Button size="large" variant="contained">Large</Button>
      </Box>

      <Typography variant="h6" id="buttons-with-colors">
        Buttons Colors
      </Typography>
      
      <Box sx={groupStyle}>
        <Button variant="text" color="primary">Primary</Button>
        <Button variant="text" color="secondary">Secondary</Button>
        <Button variant="text" color="success">Success</Button>
        <Button variant="text" color="error">Error</Button>
        <Button variant="text" color="warning">Warning</Button>
        <Button variant="text" color="info">Info</Button>
        <Button variant="text" color="inherit">Inherit</Button>
      </Box>
      <Box sx={groupStyle}>
        <Button variant="outlined" color="primary">Primary</Button>
        <Button variant="outlined" color="secondary">Secondary</Button>
        <Button variant="outlined" color="success">Success</Button>
        <Button variant="outlined" color="error">Error</Button>
        <Button variant="outlined" color="warning">Warning</Button>
        <Button variant="outlined" color="info">Info</Button>
        <Button variant="outlined" color="inherit">Inherit</Button>
      </Box>
      <Box sx={groupStyle}>
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
        <Button variant="contained" color="success">Success</Button>
        <Button variant="contained" color="error">Error</Button>
        <Button variant="contained" color="warning">Warning</Button>
        <Button variant="contained" color="info">Info</Button>
        <Button variant="contained" color="inherit">Inherit</Button>
      </Box>
    </div>
  );
}
