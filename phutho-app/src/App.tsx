// App.tsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> 
        <Header />
        <main className="flex-grow"> 
          <div>aaaa</div>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
