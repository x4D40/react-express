import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home/Home";

function Test() {
  return(<p>Test page</p>)
}

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home></Home>
      </Route>

      <Route exact path="/test">
        <Test></Test>
      </Route>
    </Router>
  );
}

export default App;
