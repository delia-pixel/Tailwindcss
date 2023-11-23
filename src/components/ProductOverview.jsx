import React from "react";
import { sizes } from "../constants";
import Button from "./Button";

const ProductOverview = ({ imgURL, name, price }) => {
  return (
    <div className="flex justify-between w-[40vw] p-4">
      <div className="w-1/2 h-auto flex bg-[#C1C4DE]">
        <img src={imgURL} alt="" width={500} />
      </div>
      <div className=" w-1/2 pl-2 pr-3">
        <h1 className="text-3xl font-montserrat pt-3 font-bold">{name}</h1>
        <p className="font-montserrat">Chaussure pour homme</p>
        <p className="font-bold text-xl leading-8 text-coral-red">{price}</p>
        <div className="font-palanquin">
          <p className=" text-slate-500 text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur voluptatibus vitae reiciendis commodi voluptatem quis
            non, dolore mollitia quos minima, deleniti accusantium modi
            exercitationem. Ex earum repudiandae nam eum libero.
          </p>
          <h3 className="text-lg font-bold pt-2">Size :</h3>
          <div className="flex row gap-2 m-2">
            {sizes.map((size) => (
              <button className="border-2 cursor-pointer border-black p-1 text-xl w-8">{size.size}</button>
            ))}
          </div>
          <Button label="Add to cart" backgroundColor={'coral-red'} fullWidth className="p-6"></Button>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
