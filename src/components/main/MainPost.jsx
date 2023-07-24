import React from "react";
import { styled } from "styled-components";
import MainPostUser from "./MainPostUser";
import MainPostBottom from "./MainPostBottom";

const MainPost = ({ post }) => {
  return (
    <MainPostWrap>
      <MainPostUser
        writer={post.writer}
        userImgUrl={post.userImgUrl}
        updatedAt={post.updatedAt}
      />
      <div className="postImg">
        <img src={post.imgUrl} alt="사진" />
      </div>
      <MainPostBottom
        isLike={post.isLike}
        likeCount={post.likeCount}
        postId={post.postId}
        content={post.content}
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
      height: 470px;
      object-fit: cover;
    }
  }
  @media (max-width: 500px) {
    width: 90%;
    .postImg {
      img {
        height: 400px;
      }
    }
  }
`;
export default MainPost;
