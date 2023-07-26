import React from "react";
import { styled } from "styled-components";
import MainPostUser from "./MainPostUser";
import MainPostBottom from "./MainPostBottom";

const MainPost = ({ post }) => {
  return (
    <MainPostWrap>
      <MainPostUser
        writer={post.writer}
        userImgUrl={post.writerImgUrl}
        createdAt={post.createdAt}
      />
      <div className="postImg">
        <img src={post.postImgUrl} alt="사진" />
      </div>
      <MainPostBottom
        like={post.like}
        likeCount={post.likeCount}
        postId={post.postId}
        content={post.content}
        commentCount={post.commentCount}
      />
    </MainPostWrap>
  );
};
const MainPostWrap = styled.div`
  width: 470px;
  margin-bottom: 5%;
  .postImg {
    img {
      width: 100%;
      aspect-ratio: 1/1;
      object-fit: cover;
    }
  }
  @media (max-width: 500px) {
    width: 90%;
    .postImg {
      img {
        aspect-ratio: 1/1;
      }
    }
  }
`;
export default MainPost;
