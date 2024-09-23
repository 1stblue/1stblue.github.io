import Logo from "./Logo";
import Menu from "./Menu";
import Telephone from "./Telephone";
import Tryout from "./Tryout";
import User from "./User";

export default function Navbar() {
  return (
    <header className="w-[1120px] h-[56px]">
      <nav className="flex items-center text-[14px]">
        <Logo />
        <Menu />
        <Telephone />
        <User />
        <Tryout />
      </nav>
   </header>
  )
}
