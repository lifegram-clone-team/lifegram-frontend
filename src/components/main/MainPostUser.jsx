import React from "react";
import { styled } from "styled-components";

const MainPostUser = ({ writer, userImgUrl, createdAt }) => {
  return (
    <>
      {createdAt && (
        <MainPostUserWrap>
          <img src={userImgUrl} />
          <div className="name">{writer}</div>
          <div className="date">{createdAt.slice(2, 10)}</div>
        </MainPostUserWrap>
      )}
    </>
  );
};
const MainPostUserWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 0 12px 4px;
  img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }
  .name {
    font-weight: bold;
  }
  .date {
    color: #848484;
  }
`;
export default MainPostUser;
