import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import HomePage from "./Pages/HomePage";
import {Navigate,Routes,Route} from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";



function App() {
  return (
    <div className="App">
        <Sidebar/>
        <MainContentStyled >

         

              <Routes>
                     <Route path="/" element={ < Navigate to= "/home" /> } />
                    <Route path="/home" element={ <HomePage/> } />
                    <Route path="/about" element={ <AboutPage/> } />
                    <Route path="/contact" element={ <ContactPage/> } />
                    
              </Routes>

            

        </MainContentStyled>
      
    </div>
  );
}
const MainContentStyled = styled.main`
  position: relative;
  margin-left: 12rem;
  min-height: 100vh;



`;

export default App;
