import { styled } from 'styled-components';

const ProfileContainer = ({ writerImgUrl, writer }) => {
  return (
    <StProfileContainer>
      <StProImgContainer>
        <img src={writerImgUrl} alt='writerimg' />
      </StProImgContainer>
      <div>{writer}</div>
    </StProfileContainer>
  );
};

export default ProfileContainer;

const StProfileContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
  margin-top: 10px;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
`;

const StProImgContainer = styled.div`
  width: 40px;
  height: 40px;

  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
