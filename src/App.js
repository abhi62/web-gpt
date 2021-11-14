import { Navbar } from "./components";
import { Footer, Header } from "./containers";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Footer />
    </div>
  );
}

export default App;
