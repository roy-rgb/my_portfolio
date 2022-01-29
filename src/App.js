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

              <div className="lines">
              
                 <div className="line-1"></div>
                 <div className="line-2"></div>
                 <div className="line-3"></div>
                 <div className="line-4"></div>
              </div>

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
  margin-left: 16.3rem;
  min-height: 100vh;

  .lines{
    position:absolute;
    min-height:100vh;
    width:100%;
    display: flex;
    justify-content: space-evenly;

    .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }

`;

export default App;
