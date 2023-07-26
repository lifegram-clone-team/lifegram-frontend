import { styled } from 'styled-components';
import CommentContainer from './CommentContainer';
import ProfileContainer from './ProfileContainer';
import { deletePost, getPostDetail } from '../../api/api';
import { useMutation } from 'react-query';
import { useQueryClient } from 'react-query';
import DetailFooter from './DetailFooter';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import ReactDom from 'react-dom';

const DetailModal = ({ postId, onClickOpenModal }) => {
  // const token = localStorage.getItem('accessToken');

  //로직 시작

  const queryClient = useQueryClient();

  const { mutate: deleteMutation } = useMutation(() => deletePost(postId), {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    },
  });
  const onClickDeletePost = async () => {
    deleteMutation();
  };

  const { isLoading, isError, data, error } = useQuery('postdetail', () => getPostDetail(postId));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error}</div>;
  }

  return ReactDom.createPortal(
    <StModal>
      <StModalBg onClick={onClickOpenModal} />
      <StDetailModal>
        <StImgContainer>
          <img src={data.postImgUrl} alt='img' />
        </StImgContainer>
        <StPost>
          <StModify>
           <Link to={`/modify/${postId}`}>
            <div className='modify'>수정</div>
            </Link>
            <div className='delete' onClick={() => onClickDeletePost(postId)}>
              삭제
            </div>
          </StModify>
          <ProfileContainer writerImgUrl={data.writerImgUrl} writer={data.writer} />
          <hr />
          <ProfileContainer
            writerImgUrl={data.writerImgUrl}
            writer={data.writer}
            content={data.content}
            createdAt={data.createdAt}
            media='media'
          />
          {data &&
            data.comments?.map((comment) => {
              return <CommentContainer key={comment.commentId} comment={comment} postId={postId} />;
            })}
          <DetailFooter
            like={data.like}
            likeCount={data.likeCount}
            commentCreatedAt={data.commentCreatedAt}
            id={postId}
          />
        </StPost>
      </StDetailModal>
    </StModal>,
    document.getElementById('portal')
  );
};

export default DetailModal;

const StModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const StModalBg = styled.div`
  width: 100%;
  height: 100vh;
  inset: 0px;
  position: fixed;
  opacity: 0.65;
  background-color: rgb(0, 0, 0);
`;

const StDetailModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 90%;
  border-radius: 5px;
  background-color: white;
  z-index: 1;

  @media (max-width: 735px) {
    flex-direction: column;
    width: 490px;
  }
`;

const StImgContainer = styled.div`
  width: 70%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  @media (max-width: 735px) {
    width: 100%;
    height: 50%;
  }
`;

const StPost = styled.div`
  position: relative;
  width: 30%;
  min-width: 490px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: baseline;

  hr {
    width: 100%;
    background: #5d5d5d;
    height: 1px;
    border: 0;
  }

  .content {
    padding-left: 55px;
    padding-right: 15px;
  }

  .time {
    font-size: 13px;
    color: grey;

    &.main {
      padding-left: 15px;
    }
  }
`;

const StModify = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  right: 10px;
  top: 20px;
  color: grey;

  .modify {
    cursor: pointer;
  }

  .delete {
    cursor: pointer;
  }
`;
