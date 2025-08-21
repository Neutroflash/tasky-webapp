import Box from "@mui/material/Box";

function BarraPermanente() {
  return (
    <Box
      sx={{
        margin: 0,
        p: '0.3rem',
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FF9800",
        fontSize: '1rem'
      }}
    >
      ✨ ENVÍO GRATIS DESDE S/150 ✨
    </Box>
  );
}

export default BarraPermanente;
