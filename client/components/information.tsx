import { Info } from "../styles/main";

export default function Information() {
  return (
    <Info.Wrap>
      <div className="info-photo" />
      <div className="info-text">
        <h2>{process.env.name}</h2>
        <p className="job">{process.env.job}</p>
        <p className="skill">{process.env.skills}</p>
        <p className="link">
          <a href={process.env.link} target="_blank">
            {process.env.link}
          </a>
        </p>
      </div>
    </Info.Wrap>
  );
}
