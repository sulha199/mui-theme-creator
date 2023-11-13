import { Button, Grid, Stack } from "@mui/material"
import React from "react"

const ColorExample: React.FC = () => {
  return (
    <Stack>
      <Grid gap={4}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="inherit">
          Inherit
        </Button>
      </Grid>
    </Stack>
  )
}

export default ColorExample
