import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export interface PathProps {
  path: string;
  className?: string;
}

const Path: React.SFC<PathProps> = ({ path, className, children }) => {
  return (
    <Link to={path} className={className}>
      {children}
    </Link>
  );
};

export default Path;
