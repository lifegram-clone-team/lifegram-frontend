import React from "react";
import { styled } from "styled-components";

const ProfilePosts = () => {
  const apiPostUser = [
    {
      postId: 1,
      imgUrl:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      postId: 2,
      imgUrl:
        "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      postId: 3,
      imgUrl:
        "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      postId: 4,
      imgUrl:
        "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      postId: 5,
      imgUrl:
        "https://images.unsplash.com/photo-1509005084666-3cbc75184cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      postId: 6,
      imgUrl:
        "https://images.unsplash.com/photo-1598875706250-21faaf804361?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxkb2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },

    {
      postId: 7,
      imgUrl:
        "https://images.unsplash.com/photo-1562714529-94d65989df68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI4fHxkb2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      postId: 8,
      imgUrl:
        "https://images.unsplash.com/photo-1587764379873-97837921fd44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      postId: 9,
      imgUrl:
        "https://images.unsplash.com/photo-1553481829-2391f26d609c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA2fHxkb2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      postId: 10,
      imgUrl:
        "https://images.unsplash.com/photo-1566674717261-e3b344428702?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzIyfHxkb2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];
  apiPostUser.map((post) => console.log(post.imgUrl));

  return (
    <ProfilePostsWrap>
      {apiPostUser.map((post) => (
        <Box key={post.postId} src={post.imgUrl} alt="image" />
      ))}
    </ProfilePostsWrap>
  );
};
const ProfilePostsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Box = styled.img`
  width: calc((100% / 3) - 10px);
  aspect-ratio: 4/3;
  background-color: #f0f0f0;
  margin-bottom: 10px;
  box-sizing: border-box;
  object-fit: cover;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export default ProfilePosts;
