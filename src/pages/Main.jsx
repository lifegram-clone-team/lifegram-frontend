import React, { useState } from 'react';
import { styled } from 'styled-components';
import MainPost from '../components/main/MainPost';
import PostSkeleton from '../components/main/mainLoding/PostSkeleton';
import { getPosts } from '../api/api.js';
import { useQuery } from 'react-query';
// main page
const Main = () => {
  const [page, setPage] = useState(1);

  const { isLoading, error, data } = useQuery('mainPosts', () =>
    getPosts(page)
  );
  console.log(data);
  return (
    <HeaderMain>
      <MainHeader>
        {isLoading &&
          Array(3)
            .fill()
            .map((_, index) => <PostSkeleton key={index} />)}
        {data &&
          data.content.map((post) => (
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
