import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Router from "./router/Router";

function App() {
  return (
    <BrowserRouter>
       <div className="App">
        <Header />
        <main className="container">
          <Router />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
