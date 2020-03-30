import React from "react";
import useFetch from "../../hooks/fetch";

import "./RecipeList.css";

const RecipeList = props => {
  const recipes = ["one", "two", "three"];

  return (
    <div className="RecipeList">
      {recipes.map((r, i) => (
        <div key={i}>{r} </div>
      ))}
      asdads
    </div>
  );
};

export default RecipeList;
