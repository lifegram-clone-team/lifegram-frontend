import React from "react";
import { styled } from "styled-components";
import { FiGrid } from "react-icons/fi";

const ProfileLine = () => {
  return (
    <ProfileLineContainer>
      <div className="line"></div>
      <div className="select">
        <FiGrid />
        <p>게시물</p>
      </div>
    </ProfileLineContainer>
  );
};
const ProfileLineContainer = styled.div`
  .line {
    border: 1px solid #e6e6e6;
  }
  .select {
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 1.1rem;
    }
    p {
      margin-left: 10px;
      font-size: 1rem;
    }
    @media (max-width: 760px) {
      svg {
        font-size: 1rem;
      }
      p {
        font-size: 0.9rem;
      }
    }
  }
`;
export default ProfileLine;
