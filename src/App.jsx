import "./App.css";
import Hero from "./components/Hero";
import Demo from "./components/Demo";

const App = () => {
  return (
    <main className="relative">
      <div className="absolute w-full h-full bg-gray-200" />
      <div className="relative flex flex-col justify-center items-center max-w-7xl mx-auto sm:px-16 px-6">
        <Hero />
        <Demo />
      </div>
    </main>
  );
};

export default App;
