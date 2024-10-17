// App.tsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> {/* Sử dụng flexbox để kéo footer xuống dưới */}
        <Header />
        <main className="flex-grow"> {/* Nội dung chính ở giữa */}
          {/* Các thành phần nội dung khác */}
          <div>aaaa</div>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
