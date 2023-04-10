import { ColorModeContext, useMode } from "./Scenes/Theme";
import { CssBaseline,ThemeProvider } from "@mui/material";
import TopBar from "./Scenes/Global/TopBar";
import { Route, Routes } from "react-router-dom";
import  Dashboard from './Scenes/Dashboard'
import Team from "./Scenes/Team";
import Contact from "./Scenes/Contact";
import Invoices from "./Scenes/Invoices";
import Form from "./Scenes/Form";
import CalendarDash from "./Scenes/Calendar";

function App () {
  const [ theme, colorMode] = useMode();

  return(
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
       <CssBaseline/>
      <div className="App">
             
          <main>
              <TopBar/>
             
                     <Routes>
                         <Route path="/" element={ <Dashboard />}/>
                         <Route path="/Team" element={<Team/>} />
                         <Route path="/Contact" element={<Contact/>}/>
                         <Route path="/Invoices" element={<Invoices/>}/>
                         <Route path="/Form" element={<Form/>}/>
                         <Route path='/Calendar'  element={<CalendarDash/>}/>
                     </Routes>
            </main>
          

      </div>
    
    
    </ThemeProvider>
    
    
    </ColorModeContext.Provider>

  )


}

export default App;