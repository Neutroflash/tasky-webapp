import * as React from "react";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";

function BarraPermanente() {
  return (
    <Container disableGutters maxWidth="xl">
      <Box sx={{margin: 0, p: '0.5rem', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FF9800' }}>
        ✨ ENVÍO GRATIS DESDE S/150 ✨
      </Box>
    </Container>
  );
}

export default BarraPermanente;
