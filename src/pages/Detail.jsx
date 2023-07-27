import { styled, css } from "styled-components";
import CommentContainer from "../components/detail/CommentContainer";
import {
  deletePost,
  getPostDetail,
  getUserInfo,
  getUserPosts,
} from "../api/api";
import DetailFooter from "../components/detail/DetailFooter";
import { QueryClient, useMutation, useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import ProfileLine from "../components/profile/ProfileLine";
import WriterInfoContainer from "../components/detail/WriterInfoContainer";
import ProfileBox from "../components/profile/ProfileBox";

const Detail = () => {
  //로직 시작
  const { id } = useParams();

  const { isLoading, isError, data, error } = useQuery("postdetail", () =>
    getPostDetail(id)
  );
  const { data: profilePost } = useQuery("profilepost", () =>
    getUserPosts(1, 6)
  );
  const { data: userData } = useQuery("userData", getUserInfo);

  const { mutate: deleteMutation } = useMutation(
    () => deletePost(data.postId),
    {
      onSuccess: () => {
        QueryClient.invalidateQueries("posts");
      },
    }
  );
  const onClickDeletePost = async () => {
    deleteMutation();
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error}</div>;
  }
  return (
    <HeaderMargin>
      <ProfileWrap>
        <ProfileContainer>
          <StDetailContainer>
            <StImgContainer>
              <img src={data.postImgUrl} alt="img" />
            </StImgContainer>
            <StPost>
              <div className="writerInfoContainer">
                <WriterInfoContainer
                  writerImgUrl={data.writerImgUrl}
                  writer={data.writer}
                />
                {userData && userData.userName === data.writer && (
                  <StModify>
                    <Link to={`/modify/${data.postId}`}>
                      <div className="modify">수정</div>
                    </Link>
                    <div
                      className="delete"
                      onClick={() => onClickDeletePost(data.postId)}
                    >
                      삭제
                    </div>
                  </StModify>
                )}
                <hr />
                <WriterInfoContainer
                  writerImgUrl={data.writerImgUrl}
                  writer={data.writer}
                  content={data.content}
                  createdAt={data.createdAt}
                  media="media"
                />
              </div>
              <StCommentBox>
                {data &&
                  data.comments?.map((comment) => {
                    return (
                      <CommentContainer
                        key={comment.commentId}
                        comment={comment}
                        postId={id}
                      />
                    );
                  })}
              </StCommentBox>
              <DetailFooter
                like={data.like}
                likeCount={data.likeCount}
                commentCreatedAt={data.commentCreatedAt}
                id={id}
              />
            </StPost>
          </StDetailContainer>
          <ProfileLine />
          <ProfilePostsWrap>
            {profilePost.content &&
              profilePost.content.map((post) => {
                return <ProfileBox key={post.postId} post={post} />;
              })}
          </ProfilePostsWrap>
        </ProfileContainer>
      </ProfileWrap>
    </HeaderMargin>
  );
};
const StModify = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  right: 10px;
  top: 20px;
  color: grey;
  a {
    all: unset;
  }

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

const HeaderMargin = styled.div`
  margin-left: 15vw;
  width: 100%;
  @media (max-width: 1200px) {
    margin-left: 80px;
    padding-top: 30px;
  }
  @media (max-width: 760px) {
    all: unset;
    width: 100%;
    margin-top: 40px;
    margin-bottom: 50px;
  }
`;

const ProfileWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ProfileContainer = styled.div`
  padding: 30px 20px 0 20px;
  margin: 0 auto;
  @media (max-width: 1200px) {
    width: 95%;
    padding: 0;
  }
`;
const StDetailContainer = styled.div`
  display: flex;
  width: 100%;
  height: 900px;
  margin-bottom: 5vh;
  border: 1px solid black;
`;
const StImgContainer = styled.div`
  flex: 1;
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
  min-width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  .writerInfoContainer {
    width: 100%;
  }
`;

const StCommentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 100%;
  height: 48vh;
  overflow: auto;
  margin-bottom: 150px;
`;
const ProfilePostsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;
export default Detail;
