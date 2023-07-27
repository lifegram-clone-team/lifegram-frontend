import React from 'react';
import { GoHome, GoHomeFill } from 'react-icons/go';
import { AiOutlinePlusSquare, AiOutlineSmile } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { BsInstagram } from 'react-icons/bs';
import InstaGram from '../../assets/instagram.svg';
import { styled } from 'styled-components';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getUserInfo } from '../../api/api.js';

const Header = () => {
  const { isLoading, error, data } = useQuery('headerUserImg', getUserInfo);
  const navigate = useNavigate();
  const onClickHandleLogout = () => {
    localStorage.removeItem('accessToken');
    window.location.replace('/');
  };

  const onClickRenderProfile = () => {
    window.location.href = '/profile';
  };
  const reloadClickHandler = () => {
    window.location.href = '/profile';
    console.log('hi');
  };
  return (
    <PageContainer>
      <HeaderContainer>
        <HeaderLogo>
          <img src={InstaGram} className='smallWidth' />
          <BsInstagram className='bigWidth' onClick={() => navigate('/main')} />
        </HeaderLogo>
        <HeaderList>
          <SNavLink to='/main'>
            <GoHome className='noneActiveIcon' />
            <GoHomeFill className='activeIcon' />
            <p className='smallWidth'>홈</p>
          </SNavLink>
          <SNavLink to='/add'>
            <AiOutlinePlusSquare />
            <p className='smallWidth'>만들기</p>
          </SNavLink>
          {/* <SNavLink to="/profile">  */}
          <StLink onClick={onClickRenderProfile}>
            {data && <img src={data.profileImgUrl} alt='유저프로필' />}
            <p className='smallWidth'>프로필</p>
          </StLink>
          {/* </SNavLink> */}
        </HeaderList>
        <HeaderLogout onClick={onClickHandleLogout}>
          <BiLogOut />
          <p className='smallWidth'>로그아웃</p>
        </HeaderLogout>
      </HeaderContainer>
      <Outlet />
    </PageContainer>
  );
};
const PageContainer = styled.div`
  display: flex;
`;
const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 15vw;
  border-right: 1px solid #d8d8d8;
  display: flex;
  flex-direction: column;
  padding-top: 25px;
  box-sizing: border-box;
  padding: 8px 12px 20px 12px;
  height: 100vh;
  svg {
    font-size: 1.5rem;
    width: 25px;
    transition: all 0.2s linear;
  }
  p {
    padding-left: 16px;
    margin: 0;
    font-size: 1.1rem;
  }
  .bigWidth {
    display: none;
  }
  @media (max-width: 1250px) {
    width: 80px;
    .smallWidth {
      display: none;
    }
    .bigWidth {
      display: unset;
    }
  }
  @media (max-width: 760px) {
    border-right: unset;
    border-top: 1px solid #d8d8d8;
    flex-direction: row;
    top: unset;
    bottom: 0;
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: space-around;
    padding: 0;
    background-color: white;
  }
`;
const HeaderLogo = styled.div`
  height: 73px;
  display: flex;
  align-items: center;
  padding: 25px 12px 16px 12px;
  width: 100%;
  margin-bottom: 19px;
  box-sizing: border-box;
  img {
    display: block;
    position: relative;
    width: 103px;
  }
  .bigWith {
    color: none;
  }
  @media (max-width: 1250px) {
    margin-top: 20px;
    padding: 12px;
    height: 50px;
    display: flex;
    align-items: center;

    &:hover {
      background-color: #f2f2f2;
      border-radius: 10px;
    }
  }
  @media (max-width: 760px) {
    flex: unset;
    height: 100%;
    padding: 0;
    margin: 0;
    width: unset;
    margin: 10px;
    transition: transform 0.2s ease-in-out;
    &:hover {
      background-color: unset;
      transform: scale(1.03);
    }
  }
`;
const HeaderList = styled.div`
  width: 100%;
  flex: 1;
  display: block;
  @media (max-width: 760px) {
    display: flex;
    flex: unset;
    height: 100%;
    padding: 0;
    margin: 0;
    width: unset;
    margin: 10px;
  }
`;

const StLink = styled.div`
  color: black;
  margin: 4px 0;
  display: flex;
  align-items: center;
  padding: 12px;
  box-sizing: border-box;
  font-size: 1rem;
  text-decoration-line: none;
  img {
    border-radius: 50%;
    width: 24px;
    height: 24px;
    transition: all 0.2s linear;
  }
  svg {
    font-size: 2rem;
  }
  .activeIcon {
    display: none;
  }
  &.active {
    font-weight: bold;
    color: black;
    img {
      border: 1px solid black;
    }
    .noneActiveIcon {
      display: none;
    }
    .activeIcon {
      display: unset;
    }
  }
  &:hover {
    background-color: #f2f2f2;
    border-radius: 10px;
    transition: transform 0.2s ease-in-out;
    svg,
    img {
      transform: scale(1.03);
    }
  }
  @media (max-width: 760px) {
    transition: transform 0.2s ease-in-out;
    &:hover {
      background-color: unset;
      transform: scale(1.03);
    }
  }
`;

const SNavLink = styled(NavLink)`
  color: black;
  margin: 4px 0;
  display: flex;
  align-items: center;
  padding: 12px;
  box-sizing: border-box;
  font-size: 1rem;
  text-decoration-line: none;
  img {
    border-radius: 50%;
    width: 24px;
    height: 24px;
    transition: all 0.2s linear;
  }
  svg {
    font-size: 2rem;
  }
  .activeIcon {
    display: none;
  }
  &.active {
    font-weight: bold;
    color: black;
    img {
      border: 1px solid black;
    }
    .noneActiveIcon {
      display: none;
    }
    .activeIcon {
      display: unset;
    }
  }
  &:hover {
    background-color: #f2f2f2;
    border-radius: 10px;
    transition: transform 0.2s ease-in-out;
    svg,
    img {
      transform: scale(1.03);
    }
  }
  @media (max-width: 760px) {
    transition: transform 0.2s ease-in-out;
    &:hover {
      background-color: unset;
      transform: scale(1.03);
    }
  }
`;
const HeaderLogout = styled.div`
  padding: 1%;
  font-weight: bold;
  padding: 12px;
  display: flex;
  &:hover {
    background-color: #f2f2f2;
    border-radius: 10px;
  }
  @media (max-width: 760px) {
    transition: transform 0.2s ease-in-out;
    &:hover {
      background-color: unset;
      transform: scale(1.03);
    }
  }
`;
export default Header;
