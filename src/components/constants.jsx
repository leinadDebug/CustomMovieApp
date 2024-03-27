import { useNavigate } from "react-router-dom";

export function Movies({ movie }) {
  const navigate = useNavigate();
  //this is the display for each movies.
  return (
    <div
      className="flex gap-6 p-3 m-4 hover:bg-[#18313a] duration-500 transition-colors rounded-md"
      onClick={() => {
        navigate(`/movies/${movie.title}`);
      }}
    >
      <img
        className="h-20 w-20 "
        src={`${
          movie.Poster ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-HFvj_Y2D5kMYGUBij4oWHdaA2F519i0z_m4G2GR8ZHes6a_iSzFejERD7rdq7alSuVQ&usqp=CAU"
        }`}
        alt={`${movie.title} poster`}
      ></img>
      <div className="flex flex-col gap-3">
        <label className="">
          <strong>{movie.title}</strong>
        </label>
        <label className=" text-left">📅 {movie.release_date}</label>
      </div>
    </div>
  );
}
