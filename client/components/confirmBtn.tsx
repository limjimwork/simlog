import { Btn } from "../styles/common";

type btnProps = {
  onClickCancle: () => void;
  onClickConfirm: () => void;
};

export default function ConfirmBtn({
  onClickCancle,
  onClickConfirm,
}: btnProps) {
  return (
    <Btn.Confirm>
      <button className="cancle" onClick={onClickCancle}>
        취소
      </button>
      <button className="confirm" onClick={onClickConfirm}>
        등록
      </button>
    </Btn.Confirm>
  );
}
