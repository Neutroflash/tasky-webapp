import NavBar from "./components/Navbar/Navbar";
import BarraPermanente from "./components/Navbar/BarraSuperior";
import Principal from "./components/Navbar/Principal";
import { Container } from "@mui/material";

function App() {
  
  return (
   <>
    <Container maxWidth={false} disableGutters sx={{width: '100%'}}>
      <BarraPermanente />
      <NavBar />
      <Principal/>
    </Container>
   </>
  )
}

export default App
