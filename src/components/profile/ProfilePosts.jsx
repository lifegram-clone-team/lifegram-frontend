import React, { useCallback, useEffect, useRef, useState } from "react";
import { useInfiniteQuery } from "react-query";
import { styled } from "styled-components";
import { getUserPosts } from "../../api/api";
import { Link } from "react-router-dom";
import ProfileBox from "./ProfileBox";

const ProfilePosts = () => {
  const observerElem = useRef(null);
  const {
    data,
    isSuccess,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
  } = useInfiniteQuery(
    "mainPosts",
    ({ pageParam = 1 }) => getUserPosts(pageParam),
    {
      getNextPageParam: (posts) => {
        return posts.last ? false : posts.pageable.pageNumber + 2;
      },
    }
  );
  const handleObserver = useCallback(
    (entries) => {
      const [target] = entries;
      if (target.isIntersecting && hasNextPage) {
        console.log("next page");
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
  data && console.log("allpost", allPosts);

  return (
    <ProfilePostsWrap>
      {isSuccess &&
        allPosts.map((post) => (
          <ProfileBox
            key={post.postId}
            post={post}      
          />
        ))}
      <div ref={observerElem}></div>
    </ProfilePostsWrap>
  );
};

const ProfilePostsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export default ProfilePosts;
