import { List } from "../styles/main";

export default function MainList() {
  return (
    <List.Wrap className="center-content">
      <ul>
        <li className="card">
          <h3>제목</h3>
          <p>본문 일부</p>
          <div className="detail">
            <span>몇 일전</span>
            <span>하트 수</span>
            <span>댓글 수</span>
          </div>
        </li>
      </ul>
    </List.Wrap>
  );
}
