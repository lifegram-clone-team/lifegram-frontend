import { styled } from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import leftImg from "../assets/image/signLeftImg.png";
import Instagram from "../assets/image/instagram-logo.png";
import Input from "../components/common/intput/Input";
import Button from "../components/common/button/Button";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userName: "",
  });
  const { email, password, userName } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const regExEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regExPassword = /^[a-zA-Z0-9]{8,16}$/;
    const regExUserName = /^[a-zA-Z0-9_]{5,12}$/;

    // 이메일 유효성 검사
    if (!regExEmail.test(email)) {
      alert("올바른 이메일 형식이 아닙니다.");
      return;
    }
    // 사용자 이름 유효성 검사
    if (!regExUserName.test(userName)) {
      alert(
        "사용자 이름은 영문, 숫자, 밑줄(_)로 5자 이상 12자 이하로 작성해야 합니다."
      );
      return;
    }
    // 비밀번호 유효성 검사
    if (!regExPassword.test(password)) {
      alert(
        "비밀번호는 영문 대소문자, 숫자로 8자 이상 16자 이하로 작성해야 합니다."
      );
      return;
    }
    // 유효성 검사를 통과한 경우, 새로운 사용자 정보를 생성하여 서버에 전송
    try {
      await axios
        .post("https://four-cut.store/api/auth/signup", formData)
        .then((res) => {
          console.log(res);
          navigate("/");
        });
    } catch (error) {
      console.error("사용자 생성 오류:", error);
    }
  };

  return (
    <LoginWrapper>
      <Left>
        <img src={leftImg} alt="rasm" />
      </Left>
      <Right>
        <img
          src={Instagram}
          alt="rasm"
          style={{ width: "150px", height: "40px" }}
        />
        <Form onSubmit={onSubmitHandler}>
          <h3>친구들의 사진과 동영상을 보려면 가입하세요.</h3>
          <LoginBtn>
            계정이 있으신가요?
            <Pnext onClick={() => navigate("/register")}>로그인</Pnext>
          </LoginBtn>
          <Input
            name="email"
            value={email}
            type="email"
            placeholder="이메일 주소"
            onChange={handleChange}
          />
          <Input
            name="userName"
            value={userName}
            type="text"
            placeholder="닉네임"
            onChange={handleChange}
          />
          <Input
            name="password"
            value={password}
            type="password"
            placeholder="비밀번호"
            onChange={handleChange}
          />
          <span>
            저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에
            업로드했을 수도 있습니다. 더 알아보기
          </span>
          <Button type="submit">가입</Button>
        </Form>
      </Right>
    </LoginWrapper>
  );
};

export default Signup;

const LoginWrapper = styled.div`
  background: #e5e5e5;
  width: 100vw;
  height: 100vh;
  align-items: center;
  box-sizing: border-box;
  display: flex;
`;
const Left = styled.div`
  width: 50%;
  display: none;
  display: flex;
  justify-content: right;
  img {
    width: 621px;
    height: 582px;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const Right = styled.div`
  width: 50%;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  border-radius: 10px;
  width: 374px;
  height: 520px;
  display: flex;
  flex-direction: column;
  img {
    margin: 0 auto;
    margin-top: 45px;
  }
  @media screen and (max-width: 800px) {
    margin: 0 auto;
  }
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  span {
    font-size: 12px;
    width: 330px;
    text-align: center;
    margin: 10px 0px 10px 0px;
  }
  h3 {
    width: 268px;
    font-size: 17px;
    text-align: center;
    color: #737373;
  }
`;
const Pnext = styled.div`
  color: #0095f6;
  cursor: pointer;
`;
const LoginBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
`;
