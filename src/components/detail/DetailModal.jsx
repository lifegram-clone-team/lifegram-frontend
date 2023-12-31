import { styled, css } from "styled-components";
import CommentContainer from "./CommentContainer";
import WriterInfoContainer from "./WriterInfoContainer";
import { deletePost, getPostDetail, getUserInfo } from "../../api/api";
import { useMutation } from "react-query";
import { useQueryClient } from "react-query";
import DetailFooter from "./DetailFooter";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import ReactDom from "react-dom";

const DetailModal = ({ postId,  setOpenModal }) => {
  // const token = localStorage.getItem('accessToken');

  //로직 시작
  const onClickOpenModal = () => {
    setOpenModal(false);
    window.history.pushState(null, null, `/main`);
  };

  const queryClient = useQueryClient();

  const { mutate: deleteMutation } = useMutation(() => deletePost(postId), {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
  });
  const onClickDeletePost = async () => {
    deleteMutation();
  };

  const { isLoading, isError, data, error } = useQuery("postdetail", () =>
    getPostDetail(postId)
  );

  const { data: userData } = useQuery("userData", getUserInfo);
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error}</div>;
  }
  // 잘못된 사진을 가져다 놓음
  return ReactDom.createPortal(
    <StModal>
      <StModalBg onClick={onClickOpenModal} />
      <StDetailModal>
        <StImgContainer>
          <img src={data.postImgUrl} alt="img" />
        </StImgContainer>
        <StPost>
        { userData && userData.userName === data.writer &&
          <StModify >
            <StLink to={`/modify/${postId}`}>
              <div className="modify">수정</div>
            </StLink>
            <div className="delete" onClick={() => onClickDeletePost(postId)}>
              삭제
            </div>
          </StModify>
        }
          <WriterInfoContainer
            writerImgUrl={data.writerImgUrl}
            writer={data.writer}
          />
          <hr />
          <WriterInfoContainer
            writerImgUrl={data.writerImgUrl}
            writer={data.writer}
            content={data.content}
            createdAt={data.createdAt}
            media="media"
          />
          <StCommentBox>
            {data &&
              data.comments?.map((comment) => {
                return (
                  <CommentContainer
                    key={comment.commentId}
                    comment={comment}
                    postId={postId}
                  />
                );
              })}
          </StCommentBox>
          <DetailFooter
            like={data.like}
            likeCount={data.likeCount}
            commentCreatedAt={data.commentCreatedAt}
            id={postId}
          />
        </StPost>
      </StDetailModal>
    </StModal>,
    document.getElementById("portal")
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
  opacity: 0.7;
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
    width: 100%;
    height: 100%;
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
const StCommentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 100%;
  height: 70%;
  overflow: auto;
  margin-bottom: 150px;
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
    &:hover {
      color: black;
      font-weight: bold;
    }
  }

  .delete {
    cursor: pointer;
    &:hover {
      color: red;
      font-weight: bold;
    }
  }
`;
const StLink = styled(Link)`
  text-decoration: none;
  color: grey;
`;
