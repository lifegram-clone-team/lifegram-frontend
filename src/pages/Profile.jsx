import React from 'react';
import { styled } from 'styled-components';
import ProfileUser from '../components/ProfileUser';
import ProfileLine from '../components/ProfileLine';
import ProfilePosts from '../components/ProfilePosts';

const Profile = () => {
  return (
    <HeaderMargin>
      <ProfileWrap>
        <ProfileContainer>
          <ProfileUser />
          <ProfileLine />
          <ProfilePosts />
        </ProfileContainer>
      </ProfileWrap>
    </HeaderMargin>
  );
};
const HeaderMargin = styled.div`
  margin-left: 15vw;
  width: 100%;
  @media (max-width: 1200px) {
    margin-left: 80px;
    padding-top: 30px;
  }
  @media (max-width: 760px) {
    all: unset;
    width: 100%;
    margin-top: 40px;
    margin-bottom: 50px;
  }
`;
const ProfileWrap = styled.div`
  display: flex;
  justify-content: center;
`;
const ProfileContainer = styled.div`
  width: 935px;
  padding: 30px 20px 0 20px;
  margin: 0 auto;
  @media (max-width: 1200px) {
    width: 90%;
    padding: 0;
  }
`;
export default Profile;
