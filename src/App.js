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
import FaqDash from "./Scenes/Faq";
import Bar from "./Scenes/Bar";
import Pie from "./Scenes/Pie";
import Line from "./Scenes/Line";
import Geo from "./Scenes/Geograpy";
import SidBar from "./Scenes/Global/SidBar";
import { useState } from "react";
import GeograpyDas from "./Components/Header/Geograpy";



function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SidBar isSidebar={isSidebar} />
          <main className="content">
            <TopBar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contact />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FaqDash />} />
              <Route path="/calendar" element={<CalendarDash />} />
              <Route path="/geography" element={<GeograpyDas />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;