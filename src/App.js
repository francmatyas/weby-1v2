import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import { cloneElement } from "react";

import Home from "@pages/Home";
import Places from "@pages/Places";
import About from "@pages/About";
import Contact from "@pages/Contact";
import FAQ from "@pages/FAQ";
import Gallery from "@pages/Gallery";
import PlacePages from "@pages/places/_exportPlaces";

function App() {
  return (
    <div className={"appContainer"}>
      <Header />
      <div className={`appContent`}>
        <main className={"appMain"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/places">
              <Route index element={<Places />} />
              {Object.entries(PlacePages).map(([key, component]) => (
                <Route key={key} path={key} element={cloneElement(component)} />
              ))}
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
