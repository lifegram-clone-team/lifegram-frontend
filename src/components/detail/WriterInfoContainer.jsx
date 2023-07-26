import { css, styled } from 'styled-components';

const WriterInfoContainer = ({ writerImgUrl, writer, content, createdAt, media }) => {
  return (
    <StProfileContainer media={media}>
      <StProImgContainer>
        <img src={writerImgUrl} alt='writerimg' />
      </StProImgContainer>
      <StProBodyContainer>
        <StWriterContent>
          <span className='writer'>{writer}</span>
          <span>{content}</span>
        </StWriterContent>
        <div className='time '>{createdAt}</div>
      </StProBodyContainer>
    </StProfileContainer>
  );
};

export default WriterInfoContainer;

const StProfileContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
  padding-bottom: 10px;
  margin-top: 10px;
  align-items: center;
  padding-left: 15px;

  ${(props) =>
    props.media === 'media' &&
    css`
      @media (max-width: 735px) {
        display: none;
      }
    `}
`;

const StProImgContainer = styled.div`
  min-width: 40px;
  height: 40px;

  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const StProBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const StWriterContent = styled.div`
  display: flex;
  gap: 10px;
  padding-right: 15px;

  .writer {
    font-size: 16px;
    font-weight: 700;
  }
`;
