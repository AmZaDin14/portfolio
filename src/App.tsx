import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Footer from "./components/Footer";
import About from "./routes/About";

const App = () => (
  <div className="flex flex-col h-screen justify-between">
    <Navbar />
    <div className="h-full pt-10 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="h-full flex flex-col items-center justify-center">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </div>
    <Footer />
  </div>
);

export default App;
