import React, { useState } from "react";
import { BsHeart, BsHeartFill, BsChat } from "react-icons/bs";
import { styled } from "styled-components";

const MainPostBottom = ({ isLike, likeCount, postId, content }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const changeLikeCount =
    likeCount >= 10000 ? `${likeCount / 10000}만` : likeCount;

  const showMoreClickHandler = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <MainPostLikeWrap>
      <MainPostIcons islike={isLike.toString()}>
        <BsHeart className="isLikeNo" />
        <BsHeartFill className="isLikeYes" islike={isLike.toString()} />
        {/* styled-components true, false 사용 오류 */}
        <BsChat />
      </MainPostIcons>
      <MainPostLikeLength>
        <p>좋아요 {changeLikeCount}개</p>
      </MainPostLikeLength>
      <MainPostContent>
        {content.length > 25
          ? isShowMore
            ? content
            : content.slice(0, 25).padEnd(28, ".")
          : content}
        {!isShowMore && content.length > 25 && (
          <div
            className="showMore"
            ismore={content.length}
            onClick={showMoreClickHandler}
          >
            더 보기
          </div>
        )}
        <div className="commentsLength">댓글 3개 모두 보기</div>
      </MainPostContent>
      <MainComment commentlength={content.length}>
        <CommentInput placeholder="댓글달기..." />
        <button commentlength={content.length}>게시</button>
      </MainComment>
      <div className="mainPostLine" />
    </MainPostLikeWrap>
  );
};

const MainPostLikeWrap = styled.div`
  margin: 4px 0;
  .mainPostLine {
    width: 100%;
    border-bottom: 1px solid #e6e6e6;
    padding-top: 16px;
  }
`;
const MainPostIcons = styled.div`
  font-size: 1.5rem;
  svg {
    font-weight: bold;
    padding: 10px 10px 8px 10px;
  }
  .isLikeYes {
    color: red;
    padding: 8px 8px 8px 0;
    display: ${({ islike }) => (islike === "true" ? "unset" : "none")};
  }
  .isLikeNo {
    padding: 8px 8px 8px 0;
    display: ${({ islike }) => (islike === "true" ? "none" : "unset")};
  }
`;
const MainPostLikeLength = styled.div`
  p {
    margin: 0;
    font-weight: bold;
  }
`;
const MainPostContent = styled.div`
  margin-top: 8px;
  .showMore {
    color: #848484;
    cursor: pointer;
  }
  .commentsLength {
    color: #848484;
    margin-top: 8px;
    font-size: 0.9rem;
  }
`;
const MainComment = styled.form`
  display: flex;
  align-items: center;
  button {
    all: unset;
    font-weight: bold;
    color: #0095f6;
    display: ${({ commentlength }) => (commentlength >= 1 ? "unset" : "none")};
  }
`;
const CommentInput = styled.input`
  all: unset;
  margin-top: 8px;
  flex: 1;
`;
export default MainPostBottom;
