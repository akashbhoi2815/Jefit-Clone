import { Box, Container } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import AllRoutes from "./pages/AllRoutes";

function App() {
  return (
    <Container maxW='100%'>
     
      <Box>
        <Navbar />
        <AllRoutes />
      </Box>
      
    </Container>
  );
}

export default App;
