import img from "../assets/pngwing.com.png";
import Search from "./Search";

function NavBar({number}) {
  return (
    <nav className="bg-[#01161E] py-7 text-[#AEC3B0] gap-2 px-[6%] items-center text-xs rounded-md">
      <div className="flex justify-between">
        <img className="w-10 bg-[#AEC3B0] p-2 rounded" src={img} />
        <Search />
        <h3>
          Found <strong>{number}</strong> results{" "}
        </h3>
      </div>
      <div></div>
    </nav>
  );
}

export default NavBar;
