import React, { useState } from "react";
import Modal from "../hooks/modal";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ModifyModal from "../components/modify/ModifyModal";

const ModifyPost = () => {
  const [showModalAdd, setShowModalAdd] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const onCloseHandler = () => {
    setIsOpen(false);
    navigate(-1);
  };

  return (
    <ModalModifyAlls>
      <StbuttonBox onClick={() => onCloseHandler()}>X</StbuttonBox>
      <div className='modalAfter'>
        <ModifyModal />
        <Modal isOpen={isOpen} onClose={onCloseHandler}></Modal>
      </div>
    </ModalModifyAlls>
  );
};

const ModalModifyAlls = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: rgb(0, 0, 0, 0.5);

  .modalAfter {
    width: 100%;
    height: 100%;
    font-size: 23px;
    text-align: center;
  }
  .modalAfter > h4 {
    font-size: 40px;
    color: #ffffff;
    font-weight: 800;
  }
  .modalAfter > button {
    background: #ffffff;
    color: #90b7fd;
    font-size: 17px;
    font-weight: 600;
    border: none;
    width: 165px;
    height: 53px;
  }
  .explain {
    font-size: 20px;
  }
  @media screen and (max-width: 767px) {
    .modifyPostWrap > .postSharesWrap > .postShare {
      height: 5%;
      padding-bottom: 7px;
    }
    .modifyPost > .addContents > .user {
      height: 8%;
    }
    .modifyPostWrap > .postSharesWrap > .modifyPost > .addImg > .images > .imageText {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 500px) {
    .modifyPostWrap > .postSharesWrap {
      width: 85%;
      height: 40%;
    }
    .modifyPostWrap > .postSharesWrap > .postShare {
      height: 40px;
    }
    .modifyPost > .addContents > .contents > textarea {
      height: 100%;
      min-height: 0;
    }

    .modifyPost > .addImg {
      height: 50%;
      width: 100%;
      min-height: 200px;
    }
    .modifyPost > .addImg > img {
      width: 85%;
    }
    .modifyPostWrap > .postSharesWrap > .modifyPost > .addImg > .images > .imgUploadIcons {
      min-height: 140px;
    }
    .modifyPostWrap > .postSharesWrap > .modifyPost > .addImg > .button > .inputFileBtn {
      margin-top: 10px;
    }
  }
`;
const StbuttonBox = styled.button`
  position: absolute;
  top: 15px;
  right: 10px;
  width: 40px;
  height: 40px;
  color: #ffffff;
  background: transparent;
  border: none;
  cursor: pointer;
`;
export default ModifyPost;
