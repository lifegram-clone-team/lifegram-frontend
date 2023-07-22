import { styled } from 'styled-components';
import leftImg from '../assets/image/signLeftImg.png';
import Instagram from '../assets/image/instagram-logo.png';
import Input from '../components/common/intput/Input';
import Button from '../components/common/button/Button';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
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
          <h3>친구들의 사진과 동영상을 보려면 가입하세요.</h3>
          <LoginBtn>
            계정이 있으신가요?
            <Pnext onClick={() => navigate('/')}>로그인</Pnext>
          </LoginBtn>
          <Input placeholder="이메일 주소" />
          <Input placeholder="닉네임" />
          <Input placeholder="비밀번호" />
          <span>
            저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에
            업로드했을 수도 있습니다. 더 알아보기
          </span>
          <Button>가입</Button>
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
