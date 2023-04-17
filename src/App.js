import { Routes, Route,Navigate } from "react-router-dom";
import "./App.css"
import About from "./pages/About.js";
import Services from "./pages/Services";
import Technologies from "./pages/Technologies";
import Join from "./pages/Join";
import OutletIndex from "./pages/outlet";
import Index from "./pages";




function App() {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<OutletIndex/>}>
          <Route index element={<Index/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="technologies" element={<Technologies/>}/>
          <Route path="services" element={<Services/>}/>
          <Route path="join" element={<Join/>}/>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Route>
      </Routes>
    </main>
  );
}

export default App;
