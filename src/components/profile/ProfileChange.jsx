import React, { useState } from "react";
import { styled } from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlinePicture } from "react-icons/ai";
import imageCompression from "browser-image-compression";
import useInput from "../../hooks/useInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProfileChange = ({onToggleHandler}) => {
  const [fileImg, setFileImg] = useState("");
  const [addImg, setAddImg] = useInput("");
  const [image, setImage] = useState(null);
  const [openModal, setOpenModal] = useState(false);

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

    const formData = new FormData();
    formData.append("image", image);
    try {
      const response = await axios.put(
        "https://four-cut.store/api/user",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProfileChangeModalAll>
      <ProfileChangeModal>
        <div className="topX">
          <AiOutlineClose onClick={onToggleHandler} />
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
                  <AiOutlinePicture size="50" />
                </div>
                <div className="imageText">사진을 여기에 끌어다 놓으세요</div>
              </div>
            )}
            {!addImg && (
              <div className="button">
                <label className="inputFileBtn" htmlFor="inputFile">
                  컴퓨터에서 선택
                </label>
                <input
                  type="file"
                  id="inputFile"
                  accept="image/jpeg,image/jpg,image/png"
                  onChange={upLoadImgHandler}
                />
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
  .topX{width:5%;height:5%;padding-bottom: 9px;}
  .full {
    width:100%;
    max-height:750px;
    height:100%;
    inset: 0px;
    display:flex;
    flex-direction:column;
    /* background-color: rgba(0, 0, 0, 0.5); */
  }
`;
const ProfileChangeModal = styled.div`
  width: 600px;
  height: 700px;
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
    height:90%
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
  .centerImg>.imageUploadSize{width:100%;height:90%;}
  .centerImg>.imageUploadSize>img{width:100%;height:100%;object-fit:cover;}
  .centerImg>.images>.imageText{margin-top:10px;}
  .centerImg>.button{margin-top:20px;}
  .centerImg>.button>.inputFileBtn {padding: 5px 7px;
  background-color:rgb(0,149,246);border-radius: 4px;color: white;cursor: pointer;font-size:15px;}
  .centerImg>.button>input{display:none;}
  .full>.bottomBtn{margin-top:10px;}
`;
export default ProfileChange;
