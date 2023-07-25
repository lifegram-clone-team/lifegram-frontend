import React from "react";
import { styled } from "styled-components";

const PostSkeleton = () => {
  return (
    <PostSkeletonWrap>
      <PostSkeletonUserContent>
        <div className="skeletonUserImg"></div>
        <div className="skeletonUserContent"></div>
      </PostSkeletonUserContent>
      <PostSkeletonImgContent>
        <div className="skeletonImg"></div>
      </PostSkeletonImgContent>
    </PostSkeletonWrap>
  );
};
const PostSkeletonWrap = styled.div`
  width: 470px;
  margin-bottom: 8%;
  @media (max-width: 500px) {
    width: 90%;
  }
`;
const PostSkeletonUserContent = styled.div`
  display: flex;
  padding: 0 0 12px 4px;
  gap: 15px;
  align-items: center;
  .skeletonUserImg {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background-color: #f2f2f2;
  }
  .skeletonUserContent {
    width: 150px;
    height: 25px;
    background-color: #f2f2f2;
    border-radius: 15px;
  }
`;
const PostSkeletonImgContent = styled.div`
  width: 100%;
  height: 470px;
  background-color: #f2f2f2;
  border-radius: 5px;
  @media (max-width: 760px) {
    height: 350px;
  }
`;
export default PostSkeleton;
