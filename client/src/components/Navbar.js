import React from "react";
import { useAuth0 } from "../auth/AuthCtx";

const NavBar = () => {
  const {
    isAuthenticated,
    loginWithRedirect,
    logoutWithRedirect,
    getTokenSilently
  } = useAuth0();

  const getToken = async () => {
    const token = await getTokenSilently();

    const res = await fetch(
      "http://localhost:3000/recipes",
      //   const res = await fetch("http://localhost:3000/recipe/5e7d1b2704d9ce275c325a3e"
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );
    res
      .json()
      .then(json => {
        console.log("JSONNN recipe", json);
      })
      .catch(err => console.log(err));

    console.log("tokennn", token);
  };

  const qwe = () =>
    isAuthenticated ? console.log(getToken()) : console.log("logeate");

  qwe();

  return (
    <nav>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})} type="button">
          Log in
        </button>
      )}
      {isAuthenticated && (
        <button onClick={() => logoutWithRedirect({})} type="button">
          Log out
        </button>
      )}
    </nav>
  );
};

export default NavBar;
