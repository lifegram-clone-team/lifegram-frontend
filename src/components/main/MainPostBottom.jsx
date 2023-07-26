import React, { useState } from "react";
import { BsHeart, BsHeartFill, BsChat } from "react-icons/bs";
import { styled } from "styled-components";
import { createComment } from "../../api/api";
import { useMutation, useQueryClient } from "react-query";
import DetailModal from "../detail/DetailModal";
import { updateIsLike } from "../../api/api";

const MainPostBottom = ({ like, likeCount, postId, content, commentCount }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [comment, setComment] = useState("");
  const queryClient = useQueryClient();

  // 댓글생성
  const { mutate: createCommentMutate } = useMutation(
    () => createComment(postId, comment),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("comments");
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  //리액트쿼리 세팅
  //좋아요 update mutate => 요청시 boolean값 조절
  const { mutate: updateIsLikeMutation } = useMutation(
    () => updateIsLike(postId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
      },
    }
  );
  const onClickUpdateIsLike = async () => {
    updateIsLikeMutation();
  };

  const changeLikeCount =
    likeCount >= 10000 ? `${likeCount / 10000}만` : likeCount;

  const showMoreClickHandler = () => {
    setIsShowMore(!isShowMore);
  };

  const onClickOpenModal = () => {
    window.history.pushState(null, null, `/post/${postId}`);
    setOpenModal(!openModal);
  };

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (comment.trim() !== "") {
      createCommentMutate();
      setComment("");
    }
  };

  return (
    <>
      {content && (
        <MainPostLikeWrap>
          <MainPostIcons like={like.toString()}>
            <BsHeart
              className="isLikeNo"
              onClick={() => onClickUpdateIsLike()}
            />
            <BsHeartFill
              className="isLikeYes"
              onClick={() => onClickUpdateIsLike()}
            />
            {/* styled-components true, false 사용 오류 */}
            <BsChat className="chatIcon" onClick={onClickOpenModal} />
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
            <div className="commentsLength" onClick={onClickOpenModal}>
              댓글 {commentCount}개 모두 보기
            </div>
            {openModal && (
              <DetailModal
                postId={postId}
                setOpenModal={setOpenModal}               
              />
            )}
          </MainPostContent>
          <MainComment commentlength={content.length} onSubmit={submitHandler}>
            <CommentInput
              placeholder="댓글달기..."
              value={comment}
              onChange={onChangeHandler}
            />
            {comment && (
              <button commentlength={content.length} type="submit">
                게시
              </button>
            )}
          </MainComment>
          <div className="mainPostLine" />
        </MainPostLikeWrap>
      )}
    </>
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
    transition: all 0.1s linear;
    &:hover {
      transform: scale(1.2);
    }
  }
  .isLikeYes {
    color: red;
    padding: 8px 8px 8px 0;
    display: ${({ like }) => (like === "true" ? "unset" : "none")};
  }
  .isLikeNo {
    padding: 8px 8px 8px 0;
    display: ${({ like }) => (like === "true" ? "none" : "unset")};
    &:hover {
      color: #848484;
    }
  }
  .chatIcon {
    &:hover {
      color: #848484;
    }
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
    cursor: pointer;
  }
`;
const MainComment = styled.form`
  display: flex;
  align-items: center;
  button {
    all: unset;
    font-weight: bold;
    color: #0095f6;
    margin-left: 10px;
    display: ${({ commentlength }) => (commentlength >= 1 ? "unset" : "none")};
    &:hover {
      cursor: pointer;
    }
  }
`;
const CommentInput = styled.input`
  all: unset;
  margin-top: 8px;
  flex: 1;
`;
export default MainPostBottom;
