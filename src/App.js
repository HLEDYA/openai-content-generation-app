import "./App.css";
import ColdEmails from "./components/ColdEmails";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import ProductDescription from "./components/ProductDescription";
import Summarize from "./components/Summarize";
import Tweets from "./components/Tweets";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const baseUrl = "/react-apps/openai-app";

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="product-description" element={<ProductDescription />} />
          <Route path={"cold-emails"} element={<ColdEmails />} />
          <Route path="tweets" element={<Tweets />} />
          <Route path="summarize" element={<Summarize />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
