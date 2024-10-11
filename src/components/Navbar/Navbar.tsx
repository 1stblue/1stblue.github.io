import Logo from "./Logo";
import Menu from "./Menu";
// import Telephone from "./Telephone";
import Tryout from "./Tryout";
import User from "./User";

export default function Navbar() {
  return (
    <header className="w-[1120px] m-auto py-[10px] h-[56px]">
      <nav className="flex justify-between items-center">
        <div className="w-[45%] flex justify-between items-center">
        <Logo />
        <Menu />
        </div>
        <div className="w-[40%] flex justify-between items-center">
          <div className="w-[55%]">
            {/* <Telephone /> */}
          </div>
          <div className="w-[45%] flex justify-between items-center">
            <User />
            <Tryout />
          </div>
        </div>
      </nav>
   </header>
  )
}
