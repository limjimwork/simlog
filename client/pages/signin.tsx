import Router from "next/router";
import axios from "axios";
import { Login } from "../styles/common";

export default function Signin() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formdata = new FormData(e.currentTarget);

    axios
      .post("http://localhost:5000/api/user/signin", formdata, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        Router.push("/");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <Login.Wrap>
      <form onSubmit={onSubmit}>
        <input name="email" type="email" placeholder="이메일" />
        <input name="password" type="password" placeholder="비밀번호" />
        <button type="submit">로그인</button>
      </form>
    </Login.Wrap>
  );
}
