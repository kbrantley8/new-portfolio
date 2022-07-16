import { Header, Bio, About, Experience } from "./sections";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Bio />
        <About />
        <Experience />
      </div>
    </div>
  );
}

export default App;
