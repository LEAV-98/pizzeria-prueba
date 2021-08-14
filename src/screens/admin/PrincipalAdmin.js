import React from "react";
import { Link } from "react-router-dom";
export const PrincipalAdmin = () => {
  return (
    <div>
      <h1>PrincipalAdmin</h1>
      <Link to="/auth/add">Add</Link>
    </div>
  );
};
