import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";
import { Titulo1 } from "../pages/titulo1";
import { Titulo2 } from "../pages/titulo2";
import { Titulo3 } from "../pages/titulo3";
import { Titulo4 } from "../pages/titulo4";
import { Titulo5 } from "../pages/titulo5";
import { Titulo6 } from "../pages/titulo6";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/titulo1" element={<Titulo1 />} />
        <Route path="/titulo2" element={<Titulo2 />} />
        <Route path="/titulo3" element={<Titulo3 />} />
        <Route path="/titulo4" element={<Titulo4 />} />
        <Route path="/titulo5" element={<Titulo5 />} />
        <Route path="/titulo6" element={<Titulo6 />} />
      </Routes>
    </BrowserRouter>
  );
}
