import { styled } from 'styled-components';

const Button = ({ children, type }) => {
  return <Btn type={type}>{children}</Btn>;
};

export default Button;

const Btn = styled.button`
  width: 331px;
  height: 42px;
  background: #0095f6;
  border: none;
  outline: none;
  border-radius: 15px;
  font-size: 16px;
  padding: 0px 15px;
  color: white;
  font-weight: bold;
`;
