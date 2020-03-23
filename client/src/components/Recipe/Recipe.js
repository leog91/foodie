import React from "react";
import useFetch from "../../hooks/fetch";

import "./Recipe.css";

const Recipe = props => {
  const [{ data, isLoading, isError }] = useFetch(
    "http://localhost:3000/recipes",
    []
  );

  console.log("data ==>", data);
  console.log("isLoading", isLoading);

  console.log("isError", isError);

  const fakeProps = {
    name: "Tomato Spaghetti",
    ingredients: ["Tomato", "Basil", "Parmesan", "Spaghetti"],
    description:
      "“A great introduction to pasta for kids – loads of fun to eat, and a brilliant base for adding all kinds of other fresh ingredients. ”",
    image:
      "https://images.pexels.com/photos/41320/beef-cheese-cuisine-delicious-41320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200"
  };

  const ingredients = fakeProps.ingredients.map(i => (
    <div key={i}>
      <li>{i}</li>
    </div>
  ));

  return (
    <div className="Recipe">
      <div className="Article">
        <div className="Name">{fakeProps.name}</div>
        <div className="Description">{fakeProps.description}</div>
        <img className="Image" src={fakeProps.image} alt="dish" />

        {isError && <div>Something went wrong ...</div>}

        {isLoading ? (
          <div>Loading ...</div>
        ) : (
          <ul>
            {data.map(item => (
              <li key={item._id}>{item.name}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="Ingredients">
        <ul> {ingredients}</ul>
      </div>
    </div>
  );
};

export default Recipe;
