import NavBar from "./components/Navbar/Navbar";
import Principal from "./components/Navbar/Principal";
import { Container } from "@mui/material";

function App() {
  
  return (
   <>
    <Container maxWidth={false} disableGutters sx={{width: '100%', background: '#E0E1DD'}}>
      <NavBar />
      <Principal/>
    </Container>
   </>
  )
}

export default App
