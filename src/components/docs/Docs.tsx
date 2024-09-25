import Footer from "../Footer";
import Navbar from "../Navbar/Navbar";
import Content from "./Content";
import LeftAside from "./LeftAside";
import RightAside from "./RightAside";

export default function Docs() {
  return (
    <div>
        <section className="w-[1680px] m-auto px-[280px]">
          <Navbar />
        </section>
        <section className="w-[1680px] m-auto flex flex-col">
            <div className="h-[858px] flex">
                <LeftAside />
                <Content />
                <RightAside />
            </div>
            <div>分页</div>
        </section>
        <Footer />
    </div>
  )
}
