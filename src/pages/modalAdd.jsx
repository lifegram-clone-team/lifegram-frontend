import React, { useState } from 'react';
import useInput from '../hooks/useInput';
import { styled } from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs'; 
import {AiOutlinePicture} from 'react-icons/ai';
import {RxVideo} from 'react-icons/rx';
const ModalAdd = () => {
  const [addImg, setAddImg, handleImgChange] = useInput("");
  const [contents, setContents, handleContentsChange] = useInput("");

  const upLoadImgHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setAddImg(reader.result);
    }
  }
  const addPosts=(e)=>{
    setContents(e.target.value);
   }

  return (
    <AddPost>
    <form className="addPostWrap"onChange={addPosts}>
      <div className="postSharesWrap">
        <div className="postShare">
          <BsArrowLeft size="25"/>
          <h4>게시물 공유하기</h4>
          <div className="shareBtn">
            <button>공유하기</button>
          </div>
        </div>
          <div className="addPost">
            <div className="addImg">
            {addImg ? (
                <div className="imageUploadSize">
                  <img src={addImg} alt="" />
                </div>
              ) : (
                <div className="images">
                  <div className="imgUploadIcons">
                  <AiOutlinePicture size="30"/>
                  <RxVideo size="30"/>
                  </div>
                  <div className="imageText">사진과 동영상을 여기에 끌어다 놓으세요</div>
                </div>
               )}
              {!addImg && (
              <div className="button">
              <label className="inputFileBtn"htmlFor="inputFile">
                컴퓨터에서 선택
              </label>
                <input type="file" id="inputFile"accept='image/*' onChange={upLoadImgHandler} />
              </div>
              )}
            </div>
            <div className="addContents">
            <div className="user">
              <div className="userProfile">
                <img src="" alt="" />
              </div>
              <div className="userName">
                <span>ParkMinji</span>
              </div>
            </div>
            <div className="contents">
              <textarea cols="30" rows="10" placeholder="문구 입력" ></textarea>
            </div>
          </div>
          </div>
      </div>
    
    
    </form>
    </AddPost>
 
  )
}
const AddPost = styled.div`
  .addPostWrap{max-width:1055px;max-height:758px;margin:0 auto;display:flex;flex-direction:column;align-items:center; width: 100%; height: 530px;}

  /* addPost 게시물 상단 공유하기 */
  .addPostWrap>.postSharesWrap{display: flex; flex-direction: column;width: 100%;height: 100%;
    justify-content: center; align-items: center;background: #ffffff;border: 5px solid #ffffff;
    border-radius: 10px;}
  .addPostWrap>.postSharesWrap>.postShare{display:flex;border-bottom:1px solid #dedede;justify-content: space-between;align-items:center;width:860px;height:10%;}
  .postShare>.shareBtn>button{background:transparent;border:none;font-size:14px;font-weight:600;color:rgb(0,149,246);cursor:pointer;}
   /* addPost 게시물 이미지, 글씨 감싸기 */
  .addPostWrap>.postSharesWrap>.addPost{display:flex;width:100%;height:100%;}
    /* addPost 게시물 이미지 시작 */
.addPost>.addImg{max-width:860px;max-height:860px;display:flex;flex-direction:column;align-items:center;justify-content: center;width:75%;height:100%;border-right:1px solid #dedede;margin-right:10px;}
.addImg>.imageUploadSize{width:100%;height:75%;}
  .addPostWrap>.postSharesWrap>.addPost>.addImg>.images{display: flex; flex-direction: column;
    align-items: center; justify-content: center; width: 100%;height: 80%;}
    .addPostWrap>.postSharesWrap>.addPost>.addImg>.images>.imgUploadIcons{ width: 100%;  height: 40%;display:flex;justify-content: center; align-items: center;}
    .addPostWrap>.postSharesWrap>.addPost>.addImg>.images>.imageText{width:100%;height:10%;display:flex;justify-content:center;align-items:center;}
    /* addPost 게시물 이미지 업로드 버튼 */
  .addPostWrap>.postSharesWrap>.addPost>.addImg>.button>.inputFileBtn {padding: 5px 20px;
  background-color:rgb(0,149,246);border-radius: 4px;color: white;cursor: pointer;}
  .addPostWrap>.postSharesWrap>.addPost>.addImg>.button>input{display:none;}


   /* addPost 게시물 글씨 시작 */
   .addPostWrap>.postSharesWrap>.addPost>.addContents{display:flex;flex-direction:column;width:15%;height:100%;}
   .addPost>.addContents>.contents{width:100%;height:100%;}
   .addPost>.addContents>.contents>textarea{width:100%;height:100%;border:none;resize:none;}
  `

export default ModalAdd;

