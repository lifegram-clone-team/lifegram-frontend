import { useMutation } from 'react-query';
import { useQueryClient, useQuery } from 'react-query';
import { styled } from 'styled-components';
import { deleteComment, getUserInfo } from '../../api/api';

const CommentContainer = ({ comment, postId }) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => deleteComment(postId, comment.commentId), {
    onSuccess: () => {
      queryClient.invalidateQueries('comments');
    },
  });

  const { isLoading, error, data } = useQuery("userInfo", getUserInfo);

  const onClickDeleteComment = () => {
    mutate();
  };

  return (
    <StCommentContainer>
      <StProImgContainer>
        <img src={comment.writerImgUrl} alt='writerimg' />
      </StProImgContainer>
      <StCommentBody>
        <StProfile>
          <span className="writer">{comment.writer}</span>
          <div className="commentContent">{comment.content}</div>
        </StProfile>
        <StTimeDelete>
          <div className='time'>{comment.createdAt.slice(2, 10)}</div>
          {data && comment.writer === data.userName && (
          <span className='delete' onClick={() => onClickDeleteComment(postId, comment.commentId)}>
            삭제
          </span>
          )}
        </StTimeDelete>
      </StCommentBody>
    </StCommentContainer>
  );
};

export default CommentContainer;

const StCommentContainer = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 15px;
  padding-left: 10px;
  padding-right: 10px;
  @media (max-width: 735px) {
    display: none;
  }
`;

const StProImgContainer = styled.div`
  margin: 0 auto;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
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
  padding-right: 15px;
  margin-bottom: 5px;
  .writer {
    font-weight: 700;
  }
  .commentContent {
    word-break: break-all;
    overflow-wrap: break-word;
  }
`;

const StTimeDelete = styled.div`
  display: flex;
  gap: 10px;
  font-size: 13px;
  color: grey;
  .delete{
    cursor: pointer;
  }
`;
