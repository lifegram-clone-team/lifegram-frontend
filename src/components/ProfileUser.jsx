import React from "react";
import { styled } from "styled-components";

const ProfileUser = () => {
  const apiUser = {
    userName: "lee_so_hyeon",
    imgUrl:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    postCount: 10,
  };
  return (
    <ProfileUserConatiner>
      <ImgSection>
        <img src={apiUser.imgUrl} alt="Personal Profile" />
      </ImgSection>
      <UserSection>
        <div className="name">{apiUser.userName}</div>
        <div className="postLength">게시물 {apiUser.postCount}</div>
      </UserSection>
    </ProfileUserConatiner>
  );
};
const ProfileUserConatiner = styled.div`
  display: flex;
  margin-bottom: 8%;
`;
const ImgSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
  }
  @media (max-width: 760px) {
    img {
      width: 100px;
      height: 100px;
    }
  }
`;
const UserSection = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  .name {
    font-size: 1.5rem;
  }
  @media (max-width: 760px) {
    font-size: 1rem;
    .name {
      font-size: 1.3rem;
    }
  }
`;
export default ProfileUser;
