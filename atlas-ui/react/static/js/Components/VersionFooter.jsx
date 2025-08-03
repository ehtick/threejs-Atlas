import React from "react";

const VersionFooter = ({ version }) => {
  return (
    <p className="p-version">
      Atlas Version {version} · Created by Claudio González for{" "}
      <a target="_blank" href="https://www.banshee.pro/" rel="noopener noreferrer">
        Banshee
      </a>
    </p>
  );
};

export default VersionFooter;