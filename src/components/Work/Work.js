import React from "react";

function Work({ data }) {
  return (
    <div>
      {data.map((d, index) =>
        d.slug === "zaila" || d.slug === "nearest" || d.slug === "lair" ? (
          <img
            src={d.acf.app_picture}
            style={{ width: "20%", display: "block", height: "auto" }}
            key={index}
          />
        ) : null,
      )}
    </div>
  );
}

export default Work;
