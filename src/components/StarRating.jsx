import { useState } from "react";
import React from "react";

export default function StarRating({ maxRate = 5, color = "gold", size = 18 }) {
  const [rating, setRating] = useState(0);

  //----using propTypes for sticting the datatype of the props{TypeScript}
  // StarRating.propTypes = {
  //   maxRate: React.PropTypes.number,
  //   color: PropTypes.string,
  //   size: PropTypes.number,

  // }

  return (
    <div className="stars bg-[#050c0f] rounded-md max-w-[100%] p-4 ">
      <label
        className={`flex ml-auto font-extralight italic text-sm px-1 `}
      >
        Rate Movie
      </label>
      <div className="flex gap-3 p-2 rounded ">
        {Array.from({ length: maxRate }, (_, i) => (
          <div
            className=" w-fit rounded-full  bg-[#2c1d1d00]"
            key={i}
            onPointerMove={() => {
              setRating(i + 1);
            }}
          >
            <Stars key={i} full={rating >= i + 1} color={color} size={size} />
          </div>
        ))}
        <p className={`text-[#f3d736] flex items-center`}>{rating}</p>
      </div>
    </div>
  );
}

export function Stars(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || "20"}
      height="24"
      viewBox="0 0 24 24"
      fill={props.full ? "yellow" : "none"}
      stroke={props.color || "gold"}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-star"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
}
