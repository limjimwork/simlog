import Link from "next/link";
import { List } from "../styles/main";

export default function MainList() {
  return (
    <List.Wrap className="center-content">
      <ul>
        <li className="card">
          <Link href="/project/[id]" as={`/project/:id`}>
            <a>
              <h3 className="card-title">제목</h3>
              <p className="card-text">본문 일부</p>
              <div className="card-info">
                <span>몇 일전</span>
                <span>하트 수</span>
                <span>댓글 수</span>
              </div>
            </a>
          </Link>
        </li>
      </ul>
    </List.Wrap>
  );
}
