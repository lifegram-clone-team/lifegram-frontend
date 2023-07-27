import React, { useCallback, useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import MainPost from '../components/main/MainPost';
import PostSkeleton from '../components/main/mainLoding/PostSkeleton';
import { getPosts } from '../api/api.js';
import { useInfiniteQuery, useQuery } from 'react-query';

const Main = () => {
  const observerElem = useRef(null);
  const { data, isSuccess, fetchNextPage, hasNextPage, isFetching, isError } = useInfiniteQuery(
    'mainPosts',
    ({ pageParam = 1 }) => getPosts(pageParam),
    {
      getNextPageParam: (posts) => {
        return posts.last ? undefined : posts.pageable.pageNumber + 2;
      },
    }
  );

  const handleObserver = useCallback(
    (entries) => {
      const [target] = entries;
      if (target.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage]
  );

  useEffect(() => {
    const element = observerElem.current;
    const option = { threshold: 1 };

    const observer = new IntersectionObserver(handleObserver, option);
    observer.observe(element);
    return () => observer.unobserve(element);
  }, [handleObserver]);

  // 모든 페이지의 데이터를 하나의 배열로 합치기
  const allPosts = data?.pages.flatMap((page) => page.content) || [];
  data && console.log(allPosts);

  return (
    <HeaderMain>
      <MainHeader>
        {isFetching &&
          Array(3)
            .fill()
            .map((_, index) => <PostSkeleton key={index} />)}
        {data && allPosts.map((post) => <MainPost key={post.postId} post={post} />)}
        <div ref={observerElem}></div>
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
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin-top: 5%;
`;
export default Main;
