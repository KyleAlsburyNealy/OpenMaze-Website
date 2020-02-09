import React from "react";

const contents = [
  {
    id: 0,
    name: "BlockOrder",
    variable: "List of Block indices",
    default: "[]",
    description:
      "An ordered list of block indices. Blocks can be ordered however needed and called multiple times."
  },
  {
    id: 1,
    name: "BlockOrder",
    variable: "List of Block indices",
    default: "[]",
    description:
      "An ordered list of block indices. Blocks can be ordered however needed and called multiple times."
  },
  {
    id: 2,
    name: "BlockOrder",
    variable: "List of Block indices",
    default: "[]",
    description:
      "An ordered list of block indices. Blocks can be ordered however needed and called multiple times."
  },
  {
    id: 3,
    name: "BlockOrder",
    variable: "List of Block indices",
    default: "[]",
    description:
      "An ordered list of block indices. Blocks can be ordered however needed and called multiple times."
  }
];

export default function DocsTable() {
  const style = "flex items-center";
  const innerStyle = "m-4";
  return (
    <div className="border rounded-lg w-full sm:min-w-lg sm:max-w-2xl my-10 mx-4">
      <div className="grid grid-cols-8 text-white text-left overflow-auto">
        <div className={`${style} col-span-2`}>
          <p className={`${innerStyle} font-bold`}>Parameter Name</p>
        </div>
        <div className={`${style} col-span-2`}>
          <p className={`${innerStyle} font-bold`}>Variable Type</p>
        </div>
        <div className={`${style}`}>
          <p className={`${innerStyle} font-bold`}>Default</p>
        </div>
        <div className={`${style} col-span-3`}>
          <p className={`${innerStyle} font-bold`}>Description</p>
        </div>

        {contents.map(row => {
          const colour = row.id % 2 === 0 ? "bg-dark-light" : null;
          return (
            <>
              <div className={`${style} ${colour} col-span-2`}>
                <p className={`${innerStyle}`}>{row.name}</p>
              </div>
              <div className={`${style} ${colour} col-span-2`}>
                <p className={`${innerStyle}`}>{row.variable}</p>
              </div>
              <div className={`${style} ${colour}`}>
                <p className={`${innerStyle}`}>{row.default}</p>
              </div>
              <div className={`${style} ${colour} col-span-3`}>
                <p className={`${innerStyle}`}>{row.description}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
