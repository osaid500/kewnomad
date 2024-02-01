import "./App.css";
import Hero from "./components/Hero";
import Demo from "./components/Demo";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="min-h-[100vh] bg-gray-200 flex flex-col">
      <div className="relative flex flex-col justify-center items-center max-w-7xl mx-auto sm:px-16 px-6">
        <Hero />
      </div>
      <Demo />
      <Footer />
    </main>
  );
};

export default App;
