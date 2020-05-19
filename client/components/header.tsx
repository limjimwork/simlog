import { useState } from "react";
// import Gnb from "./gnb";
import { Head } from "../styles/common";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Head.Wrap>
      <div className="center flex">
        <h1>Simlog</h1>
        <div>
          <Head.Menu className={isOpen ? "open" : null} onClick={onClick}>
            <span />
            <span />
            <span />
            <span />
          </Head.Menu>
          {/* <Gnb /> */}
        </div>
      </div>
    </Head.Wrap>
  );
}
