import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Revendedores from "./pages/Revendedores";
import Tutorial from "./pages/Tutorial/Tutorial";

const App = () => {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/revendedores"
          element={<Revendedores />}
        />

        <Route
          path="/tutoriais"
          element={<Tutorial />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
};

export default App;