import React, { useState } from "react";

import pizza from "../Images/Pizza.jpeg";
import burger from "../Images/burgers-recipe.jpg";
import Lazanya from "../Images/lazania.jpg";

const Featured = () => {
  const Slider = [
    { 
      url : 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
    },
    { 
      url : 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
    },
    { 
      url : 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg'
    }
  ];
  const [currentIndex, SetCurrentIndex] = useState(0);
  return (
    <>
      <div className="max-[1620] h-[500px] w-full p-4 relative">
        <div
          className="w-full h-full rounded-xl bg-center bg-cover duration-500 "
          style={{ backgroundImage: `url(${Slider[currentIndex].url})` }}
        ></div>
      </div>
    </>
  );
};

export default Featured;
