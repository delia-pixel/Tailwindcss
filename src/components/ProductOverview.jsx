import React from "react";

const ProductOverview = ({ imgURL, name, price }) => {
  return (
    <div className="flex justify-between w-64">
      <div className="w-1/2 h-64 bg-slate-500">
        <img src={imgURL} alt="" />
      </div>
      <div className="bg-red-400">
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default ProductOverview;
