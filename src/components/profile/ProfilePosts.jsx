import React, { useState } from "react";
import { useQuery } from "react-query";
import { styled } from "styled-components";
import { getUserPosts } from "../../api/api";

const ProfilePosts = () => {
  const [page, setPage] = useState(1);
  const { isLoading, error, data } = useQuery("mainPosts", () =>
    getUserPosts(page)
  );
  data && console.log(data.content);
  return (
    <ProfilePostsWrap>
      {data &&
        data.content.map((post) => (
          <Box key={post.postId} src={post.profileImgUrl} alt="image" />
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
  aspect-ratio: 1/1;
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
