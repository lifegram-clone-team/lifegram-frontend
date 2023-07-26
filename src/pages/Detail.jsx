import { styled, css } from 'styled-components';
import CommentContainer from '../components/detail/CommentContainer';
import { getPostDetail } from '../api/api';
import DetailFooter from '../components/detail/DetailFooter';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import ProfilePosts from '../components/profile/ProfilePosts';
import ProfileLine from '../components/profile/ProfileLine';
import WriterInfoContainer from '../components/detail/WriterInfoContainer';

const Detail = () => {
  //로직 시작
  const { id } = useParams();

  const { isLoading, isError, data, error } = useQuery('postdetail', () => getPostDetail(id));

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
              <img src={data.postImgUrl} alt='img' />
            </StImgContainer>
            <StPost>
              <WriterInfoContainer writerImgUrl={data.writerImgUrl} writer={data.writer} />
              <hr />
              <WriterInfoContainer
                writerImgUrl={data.writerImgUrl}
                writer={data.writer}
                content={data.content}
                createdAt={data.createdAt}
                media='media'
              />
              <StCommentBox>
                {data &&
                  data.comments?.map((comment) => {
                    return <CommentContainer key={comment.commentId} comment={comment} postId={id} />;
                  })}
              </StCommentBox>
              <StFooterBox>
                <DetailFooter
                  like={data.like}
                  likeCount={data.likeCount}
                  commentCreatedAt={data.commentCreatedAt}
                  id={id}
                />
              </StFooterBox>
            </StPost>
          </StDetailContainer>
          <ProfileLine />
          <ProfilePosts />
        </ProfileContainer>
      </ProfileWrap>
    </HeaderMargin>
  );
};

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
`;

const ProfileContainer = styled.div`
  width: 1300px;
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
  height: 25%;
  margin-bottom: 5vh;
  border: 1px solid black;
`;
const StImgContainer = styled.div`
  width: 100%;
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
  min-width: 390px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

const StCommentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 100%;
  height: 60%;
  overflow: auto;
  margin-bottom: 150px;
`;
const StFooterBox = styled.div``;
export default Detail;
