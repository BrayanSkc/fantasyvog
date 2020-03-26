import React from "react";
import "./style.css";

export interface LoadingProps {}

const Loading: React.SFC<LoadingProps> = () => {
  return (
    <div className="loading-container-page">
      <div className="loader">
        <span>Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
