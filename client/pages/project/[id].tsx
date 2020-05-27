import { DetailPage } from "../../styles/detail";

export default function Detail() {
  return (
    <DetailPage.Wrap className="center-content">
      <h2 className="detail-title">제목</h2>
      <div className="detail-top">
        <div>
          <span>몇 일전</span>
        </div>
        <div>
          <span>하트 수</span>
          <span>댓글 수</span>
        </div>
      </div>
      <div className="detail-mid">
        <p>본문내용내용이아우</p>
      </div>
      <div className="detail-bot">댓글존</div>
    </DetailPage.Wrap>
  );
}
