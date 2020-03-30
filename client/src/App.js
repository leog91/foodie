import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Recipe from "./components/Recipe/Recipe";
import RecipeList from "./components/RecipeList/RecipeList";
import NavBar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <NavBar />

        <Link to="/recipe">Recpie</Link>

        <RecipeList />
        {/* <Recipe /> */}

        <Switch>
          <Route path="/recipe">
            <Recipe />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
