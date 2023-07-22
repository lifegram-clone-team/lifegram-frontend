import { styled } from 'styled-components';
import leftImg from '../assets/image/signLeftImg.png';
import Instagram from '../assets/image/instagram-logo.png';
import Input from '../components/common/intput/Input';
import Button from '../components/common/button/Button';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  return (
    <LoginWrapper>
      <Left>
        <img src={leftImg} alt="rasm" />
      </Left>
      <Right>
        <img
          src={Instagram}
          alt="rasm"
          style={{ width: '150px', height: '40px' }}
        />
        <Form>
          <Input placeholder="이메일 주소" />
          <Input placeholder="비밀번호" /> <br />
          <Button>로그인</Button>
          <BtnBottom>
            <div></div>
            또는
            <div></div>
          </BtnBottom>
          <p>
            계정이 있으신가요?
            <span onClick={() => navigate('/register')}>가입하기</span>
          </p>
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
