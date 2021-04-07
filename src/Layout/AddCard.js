import React from "react";


export default function AddCard() {
  return (
    <div>
      <form name="profileEdit">
        <div>
          <label htmlFor="text">User Name:</label>
          <input
            id="text"
            name="text"
            type="text"
            value="text"
          />
          <button type="button" className="btn btn-warning oi oi-cross">{" Create"}</button>
        </div>
      </form>
    </div>
  );
}