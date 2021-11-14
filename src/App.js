import { Feature, Article, Navbar, Cta, Brand } from "./components";
import {
  FeatureBig,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
  Blog,
} from "./containers";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Feature />
      <Article />
      <Cta />
      <FeatureBig />
      <Blog />
      <Possibility />
      <WhatGPT3 />
      <Footer />
    </div>
  );
}

export default App;
