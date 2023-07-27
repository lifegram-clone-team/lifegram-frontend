import React, { useState } from "react";
import { styled } from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import {AiOutlinePicture} from 'react-icons/ai';
import {RxVideo} from 'react-icons/rx';
import useInput from "../../hooks/useInput";
import imageCompression from "browser-image-compression";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProfileChange = ({ setOpenModal }) => {
  const [fileImg, setFileImg] = useState("");
  const [addImg, setAddImg] = useInput("");
  const [image, setImage] = useState(null);

  const token = localStorage.getItem("accessToken");
  const navigate=useNavigate() 



  const upLoadImgHandler = async (e) => {
    const file = e.target.files[0];

    try {
      const options = {
        maxSizeMB: 2,
        maxWidthOrHeight: 1000,
        useWebWorker: true,
      };

      const compressedFile = await imageCompression(file, options);

      const reader = new FileReader();
      reader.readAsDataURL(compressedFile);
      reader.onloadend = () => {
        const imageDataUrl = reader.result;
        setAddImg(imageDataUrl);
        setFileImg(compressedFile);
        setImage(compressedFile); 
      };
    } catch (error) {
      console.log(error);
    }
  };

  const onClickProfileUpdate = async (e) => {
   e.preventDefault();
   if (!image) {
   alert('이미지를 넣어주세요');
   }

 const formData = new FormData();
   formData.append('image',image)
   try {
     const response = await axios.put('https://four-cut.store/api/user', formData, {
     headers: {
       Authorization: `Bearer ${token}`,
       "Content-Type": "multipart/form-data",
       },
     });
     console.log(response);
     // Only navigate if the post was successful
     navigate(-1)
   } catch (error) {
     console.log(error);
   }
  }
  const onClickHandleSetModal = () => {
    setOpenModal(false);
  };
  return (
    <ProfileChangeModalAll>
     
      <ProfileChangeModal>
        <div className="topX">
          <AiOutlineClose onClick={onClickHandleSetModal} />
        </div>
        <form className="full" onSubmit={onClickProfileUpdate}>
        <div className="centerImg">
             {addImg ? (
             <div className="imageUploadSize">
                 <img src={addImg} alt="" />
               </div>
              ) : (
                <div className="images">
                  <div className="imgUploadIcons">
                  <AiOutlinePicture size="50"/>
                  <RxVideo size="50"/>
                  </div>
                  <div className="imageText">사진과 동영상을 여기에 끌어다 놓으세요</div>
                </div>
               )}
              {!addImg && (
              <div className="button">
              <label className="inputFileBtn"htmlFor="inputFile">
                컴퓨터에서 선택
              </label>
                <input type="file" id="inputFile"accept='image/jpeg,image/jpg,image/png' onChange={upLoadImgHandler} />
              </div>
              )}
        </div>
        <div className="bottomBtn">
          <button type="submit">Change</button>
        </div>
        </form>
      </ProfileChangeModal>
    </ProfileChangeModalAll>
  );
};
const ProfileChangeModalAll = styled.div`
  .topX{height:5%;padding-top:30px;}
  .full {
    width: 100%;
    height: 100vh;
    inset: 0px;
    position: relative;
    display:flex;
    flex-direction:column;
    /* background-color: rgba(0, 0, 0, 0.6); */
  }
`;
const ProfileChangeModal = styled.div`
  width: 600px;
  height: 800px;
  background-color: white;
  z-index: 100;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 50px;
  border-radius: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .topX {
    margin-left: auto;
    font-size: 2rem;
    svg {
      cursor: pointer;
    }
  }
  .centerImg {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .bottomBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      all: unset;
      width: 100px;
      height: 50px;
      font-size: 100%;
      background-color: #2e2e2e;
      color: white;
      text-align: center;
      cursor: pointer;
      border-radius: 10px;
      &:hover {
        background-color: #424242;
        border-radius: 10px;
      }
    }
  }
  .centerImg>.images{width:100%;display:flex;flex-direction:column;align-items:center;}
  .images>.imageUploadIcons>svg{width:60;height:60;}
  .centerImg>.imageUploadSize{width:100%;height:90%;object-fit:cover;}
  .centerImg>.imageUploadSize>img{width:100%;height:100%;}
  .centerImg>.images>.imageText{margin-top:10px;}
  .centerImg>.button{margin-top:20px;}
  .centerImg>.button>.inputFileBtn {padding: 5px 7px;
  background-color:rgb(0,149,246);border-radius: 4px;color: white;cursor: pointer;font-size:15px;}
  .centerImg>.button>input{display:none;}
`;
export default ProfileChange;