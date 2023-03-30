import { ColorModeContext, useMode } from "./Scenes/Theme";
import { CssBaseline,ThemeProvider } from "@mui/material";
import TopBar from "./Scenes/Global/TopBar";


function App () {
  const [ theme, colorMode] = useMode();

  return(
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <div className="App">
             <CssBaseline/>
            <main>
              <TopBar/>
            </main>

      </div>
    </ThemeProvider>
    
    
    </ColorModeContext.Provider>

  )


}

export default App;