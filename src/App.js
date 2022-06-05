import Body from "./components/body/Body";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="gridContainer">
      <header className="header">
        <Navbar />
      </header>
      <main className="main">
        <Sidebar />
        <Body />
      </main>
    </div>
  );
}

export default App;
