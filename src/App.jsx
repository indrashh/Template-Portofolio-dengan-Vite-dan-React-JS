import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import "./index.css"; // atau './App.css' jika kamu taruh di sana

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <HomePage />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
