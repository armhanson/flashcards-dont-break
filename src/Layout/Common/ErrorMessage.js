import React from "react";
import { Link } from "react-router-dom";

export default function ErrorMessage({ setError }) {
  setError(undefined);
  return (
    <div className="alert alert-danger" role="alert">
      <p>An error occurred with your request!</p>
      <br />
      <p>Please remain calm and return to the home page.</p>
      <Link to="/">
        <span className="oi oi-danger" />
      </Link>
    </div>
  );
}
