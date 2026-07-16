import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

import Home from "./pages/Home";
import Revendedores from "./pages/Revendedores";
import Tutorial from "./pages/Tutorial";

const App = () => {
  return (
    <BrowserRouter>

      <ScrollToTop />

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

      <WhatsAppButton />

    </BrowserRouter>
  );
};

export default App;