import React from "react";
import { styled } from "styled-components";
import MainPost from "../components/main/MainPost";
import PostSkeleton from "../components/main/mainLoding/PostSkeleton";

const Main = () => {
  const post = [
    {
      postId: 1,
      userImgUrl:
        "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      imgUrl:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      content: "귀여워",
      likeCount: 5,
      isLike: true,
      commentCount: 5,
      writer: "jfier.wxx_",
      createdAt: "23.03.20",
      updatedAt: "23.04.25",
    },
    {
      postId: 2,
      userImgUrl:
        "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      imgUrl:
        "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      content:
        "귀여워귀여워귀여워귀여워귀여워귀여워귀여워귀여워귀여워귀여워귀여워귀여워귀여워귀여워귀여워귀여워귀여워귀여워귀여워귀여워귀여워",
      likeCount: 5000,
      isLike: false,
      commentCount: 5,
      writer: "jfier.wxx_",
      createdAt: "23.03.20",
      updatedAt: "23.04.25",
    },
    {
      postId: 3,
      userImgUrl:
        "https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      imgUrl:
        "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      content:
        "귀여워귀여워귀여워귀여워귀여워귀여워귀여워귀여워귀여워귀여워귀여워귀여워귀여워",
      likeCount: 36500,
      isLike: true,
      commentCount: 5,
      writer: "jfier.wxx_",
      createdAt: "23.03.20",
      updatedAt: "23.04.25",
    },
    {
      postId: 4,
      userImgUrl:
        "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      imgUrl:
        "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      content: "귀여워귀여워귀여워귀여워귀여워귀여워귀여워귀여워",
      likeCount: 500,
      isLike: false,
      commentCount: 5,
      writer: "jfier.wxx_",
      createdAt: "23.03.20",
      updatedAt: "23.04.25",
    },
    {
      postId: 5,
      userImgUrl:
        "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      imgUrl:
        "https://images.unsplash.com/photo-1509005084666-3cbc75184cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      content: "귀여워",
      likeCount: 8,
      isLike: true,
      commentCount: 5,
      writer: "jfier.wxx_",
      createdAt: "23.03.20",
      updatedAt: "23.04.25",
    },
    {
      postId: 6,
      userImgUrl:
        "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      imgUrl:
        "https://images.unsplash.com/photo-1598875706250-21faaf804361?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxkb2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      content:
        "귀여워귀여워귀여워귀여워귀여워귀여워귀여워귀여워귀여워귀여워귀여워귀여워귀여워",
      likeCount: 15,
      isLike: false,
      commentCount: 5,
      writer: "jfier.wxx_",
      createdAt: "23.03.20",
      updatedAt: "23.04.25",
    },
    {
      postId: 7,
      userImgUrl:
        "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      imgUrl:
        "https://images.unsplash.com/photo-1562714529-94d65989df68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI4fHxkb2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      content:
        "귀여워귀여워귀여워귀여워귀여워귀여워귀여워귀여워귀여워귀여워귀여워귀여워귀여워귀여워귀여워",
      likeCount: 456,
      isLike: true,
      commentCount: 5,
      writer: "jfier.wxx_",
      createdAt: "23.03.20",
      updatedAt: "23.04.25",
    },
    {
      postId: 8,
      userImgUrl:
        "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      imgUrl:
        "https://images.unsplash.com/photo-1587764379873-97837921fd44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      content: "귀여워",
      likeCount: 0,
      isLike: false,
      commentCount: 5,
      writer: "jfier.wxx_",
      createdAt: "23.03.20",
      updatedAt: "23.04.25",
    },
    {
      postId: 9,
      userImgUrl:
        "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      imgUrl:
        "https://images.unsplash.com/photo-1553481829-2391f26d609c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA2fHxkb2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      content: "깜찍하고 사랑스러운 강아지",
      likeCount: 8816,
      isLike: true,
      commentCount: 5,
      writer: "jfier.wxx_",
      createdAt: "23.03.20",
      updatedAt: "23.04.25",
    },
    {
      postId: 10,
      userImgUrl:
        "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      imgUrl:
        "https://images.unsplash.com/photo-1566674717261-e3b344428702?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzIyfHxkb2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      content: "귀여운 강아지",
      likeCount: 10000,
      isLike: false,
      commentCount: 5,
      writer: "jfier.wxx_",
      createdAt: "23.03.20",
      updatedAt: "23.04.25",
    },
  ];
  return (
    <HeaderMain>
      <MainHeader>
        {Array(3)
          .fill()
          .map((_, index) => (
            <PostSkeleton key={index} />
          ))}
        {post.map((post) => (
          <MainPost key={post.postId} post={post} />
        ))}
      </MainHeader>
    </HeaderMain>
  );
};
const HeaderMain = styled.div`
  margin-left: 15vw;
  width: 100%;
  @media (max-width: 1200px) {
    margin-left: 80px;
    padding-top: 30px;
  }
  @media (max-width: 760px) {
    all: unset;
    width: 100%;
    margin-bottom: 50px;
  }
`;
const MainHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
`;
export default Main;
