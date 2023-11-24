import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/home";
import CountryName from "./pages/country";
import { City } from "./pages/city";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:countryName" element={<CountryName />} />
        <Route path="/capital/:capitalName" element={<City />} />
      </Routes>
    </BrowserRouter>
  );
}
