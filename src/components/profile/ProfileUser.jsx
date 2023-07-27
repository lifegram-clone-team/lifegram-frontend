import React, { useState } from "react";
import { styled } from "styled-components";
import { getUserInfo } from "../../api/api";
import { useQuery } from "react-query";
import { FaUserCog } from "react-icons/fa";
import ProfileChange from "./ProfileChange";

const ProfileUser = () => {
  const { isLoading, error, data } = useQuery("profileUserImg", getUserInfo);
  const [modal, setModal] = useState(false);

  const onClickHandleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      {data && (
        <ProfileUserConatiner>
          <ImgSection>
            <img src={data.profileImgUrl} alt="Personal Profile" />
          </ImgSection>
          <UserSection>
            <div className="userProfile">
              <div className="name">{data.userName}</div>
              <FaUserCog onClick={onClickHandleModal} />
            </div>
            <div className="postLength">게시물 {data.postCount}</div>
          </UserSection>
        </ProfileUserConatiner>
      )}
      {modal && (
        <ProfileModal>
          <div className="full"></div>
          <ProfileChange />
        </ProfileModal>
      )}
    </>
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
  .userProfile {
    display: flex;
    gap: 20px;
    align-items: center;
    svg {
      font-size: 1.5rem;
    }
  }
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
const ProfileModal = styled.div``;
export default ProfileUser;
