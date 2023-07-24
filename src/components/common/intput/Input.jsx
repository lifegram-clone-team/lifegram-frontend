import { styled } from 'styled-components';

const InputStyle = styled.input`
  width: 300px;
  height: 42px;
  background: #fafafa;
  border: 0.1px solid #cbcbcb;
  outline: none;
  border-radius: 5px;
  font-size: 16px;
  padding: 0px 15px;
`;

const Input = ({ placeholder, value, onChange, type, name }) => {
  return (
    <InputStyle
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
