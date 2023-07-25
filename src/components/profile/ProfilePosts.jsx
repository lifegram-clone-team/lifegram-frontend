import React, { useCallback, useEffect, useRef } from "react";
import { useInfiniteQuery } from "react-query";
import { styled } from "styled-components";
import { getUserPosts } from "../../api/api";

const ProfilePosts = () => {
  const observerElem = useRef(null);

  const { data, isSuccess, fetchNextPage, hasNextPage, isLoading, isError } =
    useInfiniteQuery(
      "mainPosts",
      ({ pageParam = 1 }) => getUserPosts(pageParam),
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

  return (
    <ProfilePostsWrap>
      {isSuccess &&
        allPosts.map((post) => (
          <Box key={post.postId} src={post.profileImgUrl} alt="image" />
        ))}
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error loading data.</div>}
      <div ref={observerElem} className="tq"></div>
    </ProfilePostsWrap>
  );
};

const ProfilePostsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  .tq {
    height: 1px;
    width: 100%;
  }
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
