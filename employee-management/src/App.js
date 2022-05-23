import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListEmployee from "./components/ListEmployee";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Header />
          <div className="container">
            <Routes> 
              <Route path="/" component = {ListEmployee}></Route>
              <Route path="/employees" component = {ListEmployee}></Route>
              <ListEmployee />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
