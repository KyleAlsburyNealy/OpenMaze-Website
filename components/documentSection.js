import React from "react";

export default function DocumentSection(props) {
  return (
    <div className="text-white max-w-sm mx-auto md:max-w-lg lg:max-w-2xl">
      <p className="opacity-75 text-sm mb-2">{props.subtitle}</p>
      <p className="text-lg font-bold mb-6">{props.title}</p>
      <p className="mb-6">{props.description}</p>
    </div>
  );
}
