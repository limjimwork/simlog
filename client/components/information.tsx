import { Info } from "../styles/main";

export default function Information() {
  return (
    <Info.Wrap>
      <div className="info-photo" />
      <div>
        <h2>이름</h2>
        <p>소개</p>
        <p>Git 주소</p>
      </div>
    </Info.Wrap>
  );
}
