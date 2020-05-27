import { Info } from "../styles/main";

export default function Information() {
  return (
    <Info.Wrap>
      <div className="info-photo" />
      <div className="info-text">
        <h2>Lim Simpson</h2>
        <p className="job">Front-end developer</p>
        <p className="skill">React, Typescript,Javascript, Html5, Css3</p>
        <p className="link">
          <a href="https://github.com/Limsimpson" target="_blank">
            https://github.com/Limsimpson
          </a>
        </p>
      </div>
    </Info.Wrap>
  );
}
