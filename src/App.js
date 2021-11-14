import { Feature, Article, Navbar, Cta, Brand } from "./components";
import {
  FeatureBig,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
  Blog,
} from "./containers";

function App() {
  return (
    <div className='App'>
      <Header />
      <Feature />
      <Article />
      <Navbar />
      <Cta />
      <FeatureBig />
      <Possibility />
      <WhatGPT3 />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
