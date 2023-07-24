import { styled } from "styled-components";
import leftImg from "../assets/image/signLeftImg.png";
import Instagram from "../assets/image/instagram-logo.png";
import Input from "../components/common/intput/Input";
import Button from "../components/common/button/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

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
    // 이메일 유효성 검사
    if (!regExEmail.test(email)) {
      alert("올바른 이메일 형식이 아닙니다.");
      return;
    }
    // 비밀번호 유효성 검사
    if (!regExPassword.test(password)) {
      alert(
        "비밀번호는 영문 대소문자, 숫자로 8자 이상 16자 이하로 작성해야 합니다."
      );
      return;
    }
    try {
      await axios
        .post("https://four-cut.store/api/auth/login", formData)
        .then((res) => {
          console.log(res);
          localStorage.setItem("accessToken", res.data.accessToken);
        });
      navigate("/main");
    } catch (error) {
      console.error("Error creating user:", error);
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
          <Input
            name="email"
            value={email}
            type="email"
            placeholder="이메일 주소"
            onChange={handleChange}
          />
          <Input
            value={password}
            type="password"
            name="password"
            placeholder="비밀번호"
            onChange={handleChange}
          />{" "}
          <br />
          <Button type="submit">로그인</Button>
          <BtnBottom>
            <div></div>
            또는
            <div></div>
          </BtnBottom>
          <p>
            계정이 있으신가요?
            <span onClick={() => navigate("/register")}>가입하기</span>
          </p>
        </Form>
      </Right>
    </LoginWrapper>
  );
};

export default Signin;

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
  height: 420px;
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
  margin-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  p {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
  }
  p > span {
    color: #0095f6;
    cursor: pointer;
  }
`;
const BtnBottom = styled.div`
  width: 320px;
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  margin-top: 20px;
  div {
    border-bottom: 0.1px solid black;
    width: 120px;
  }
`;
