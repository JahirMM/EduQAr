import { NavBar } from "./NavBar";

export function Header() {
  return (
    <div className="flex justify-between items-center pt-5 px-2 mx-auto xl:max-w-7xl">
      <div className="">
        <img src="/EduQAr_LATAM.png" alt="" className="w-36" />
      </div>
      <div className="border border-gray-500 px-3 py-1 rounded-xl">
        <NavBar />
      </div>
    </div>
  );
}
