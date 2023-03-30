import { ColorModeContext, useMode } from "./Scenes/Theme";
import { CssBaseline,ThemeProvider } from "@mui/material";
import TopBar from "./Scenes/Global/TopBar";
import Dashboard from './Scenes/Dashboard'
import { Route, Routes } from "react-router-dom";
import SidBar from "./Scenes/Global/SidBar";


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
                          <Route  path="/" element={<Dashboard/>}/>
                     </Routes>
            </main>

      </div>
      <SidBar/>
    </ThemeProvider>
    
    
    </ColorModeContext.Provider>

  )


}

export default App;