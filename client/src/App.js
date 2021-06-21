import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import Dashboard from "./Screens/Dashboard";
import Recipe from "./Screens/Recipe";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={HomeScreen} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/recipe" component={Recipe} />
    </BrowserRouter>
  );
}

export default App;
