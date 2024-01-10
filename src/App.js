import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import { Routes, Route } from "react-router-dom";

import Home from "@pages/Home";
import Places from "@pages/Places";
import About from "@pages/About";
import Contact from "@pages/Contact";
import FAQ from "@pages/FAQ";
import Gallery from "@pages/Gallery";

function App() {
  return (
    <div className={"appContainer"}>
      <Header />
      <div className={`appContent`}>
        <main className={"appMain"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/places" element={<Places />} />
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
