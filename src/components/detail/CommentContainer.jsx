import { styled } from 'styled-components';

const CommentContainer = ({ commentWriterImgUrl, commentWriter, commentContent, commentCreatedAt }) => {
  return (
    <StCommentContainer>
      <StProImgContainer>
        <img src={commentWriterImgUrl} alt='writerimg' />
      </StProImgContainer>
      <StCommentBody>
        <StProfile>
          <span className='writer'>{commentWriter}</span>
          <div>{commentContent}</div>
        </StProfile>
        <div className='time'>{commentCreatedAt}</div>
      </StCommentBody>
    </StCommentContainer>
  );
};

export default CommentContainer;

const StCommentContainer = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 15px;
  /* justify-content: center;
  align-items: center; */
`;

const StProImgContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StCommentBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const StProfile = styled.div`
  display: flex;
  gap: 10px;
  font-size: 16px;

  .writer {
    font-weight: 700;
  }
`;
