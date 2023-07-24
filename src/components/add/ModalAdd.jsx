import React, { useEffect, useState } from 'react';
import useInput from '../../hooks/useInput';
import  styled  from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs'; 
import {AiOutlinePicture} from 'react-icons/ai';
import {RxVideo} from 'react-icons/rx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { createPost } from '../../api/api';



const ModalAdd = () => {
  const [addImg, setAddImg, handleImgChange] = useInput("");
  const [addImgName, setAddImgName] = useInput("");
  const [content, setContent, handleContentsChange] = useInput("");
  const [textContents, setTextContents] = useState("");
  const [image, setImage] = useState("");
  const [inputCount, setInputCount] = useState(0);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [addUser, setAddUser] = useState(null);
  const token = localStorage.getItem('token');
  const navigate=useNavigate()
  const queryClient = useQueryClient();
  
 
  const data={
    addUser:"ParkMinji",
    addUserImg:"https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
  }
  // console.log(data.addUser)
  const upLoadImgHandler = (e) => {
    const file = e.target.files[0];
    // const [name,newName]=useState("")
    const { name } = file;
    // console.log(name)
    // console.log(file)
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const imageDataUrl = reader.result;
      const fileName = file.name;
      setAddImg(imageDataUrl);
      setAddImgName(fileName);
      createPost(textContents, imageDataUrl);
    }  
    console.log(setAddImgName)
  }
  
  // console.log(textContents)
   const { mutate: createPostMutate } = useMutation((formData) => createPost(formData), {
      onSuccess: () => {
      queryClient.invalidateQueries('posts');
      },
    });
    
    const onClickPostPost = (e) => {
      e.preventDefault();
      if (content.length === 0) {
      alert('게시글을 입력하세요');
      }
      const obj={
        content:content,
      }
    const formData = new FormData();
    formData.append('image',image)
    formData.append(
      'post',
      new Blob([JSON.stringify(obj)], { type: 'application/json' })
      );

    // formData.append('content',content)
    createPostMutate(formData);
    setContent('');
    console.log(content)
  }

    const checkContents = (e) => {
      const content = e.target.value;
      const maxLength = 2200;

      if (content.length > maxLength) {
        alert('최대 2200자까지 입력 가능합니다.');
        e.target.value = content.substring(0, maxLength); // Truncate the content to the maximum length
      }
    
      setInputCount(e.target.value.length);
      setContent(e.target.value);
      
    }; 
  return (
    <AddPost>
    <form className= "addPostWrap" onSubmit={onClickPostPost}>
      <div className="postSharesWrap">
        <div className="postShare">
          <BsArrowLeft size="25"/>
          <h4>새 게시물 공유하기</h4>
          <div className="shareBtn">
            <button type="submit">공유하기</button>
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
            <div className="addContents">
            <div className="user">
            <div className="userProfile">
              <div className="userImg">
              <img src={data.addUserImg} alt="" />
              </div>
              <p>{data.addUser}</p>
              </div>
            </div>
            <div className="contents">
              <textarea cols="30" rows={content.length > 500 ? "20" : "10"}  placeholder="문구 입력"maxLength="2200" value={content} 
                onChange={handleContentsChange}
                onInput={checkContents}
                className="content">{inputCount > 2200 ? "errorText" : ""}  </textarea>
              <p>
                <span>{inputCount}</span>
                <span>/2200자</span>
              </p>
           
            </div>
          </div>
          </div>
      </div>
    
    </form>
    </AddPost>
 
  )
}
const AddPost = styled.div`
  .addPostWrap{max-width:860px;max-height:758px;margin:0 auto;display:flex;flex-direction:column;align-items:center; width: 100%; height: 530px;}

  /* addPost 게시물 상단 공유하기 */
  .addPostWrap>.postSharesWrap{display: flex; flex-direction: column;width: 100%;height: 100%;
    justify-content: center; align-items: center;background: #ffffff;border: 5px solid #ffffff;
    border-radius: 10px;}
  .addPostWrap>.postSharesWrap>.postShare{display:flex;border-bottom:1px solid #dedede;justify-content: space-between;align-items:center;width:100%;height:10%;}
  .postShare>.shareBtn>button{background:transparent;border:none;font-size:14px;font-weight:600;color:rgb(0,149,246);cursor:pointer;}
   /* addPost 게시물 이미지, 글씨 감싸기 */
  .addPostWrap>.postSharesWrap>.addPost{display:flex;width:100%;height:100%;}
    /* addPost 게시물 이미지 시작 */
.addPost>.addImg{max-width:860px;max-height:860px;flex:1;display:flex;flex-direction:column;align-items:center;justify-content: center;width:100%;height:100%;border-right:1px solid #dedede;margin-right:10px;}
.addImg>.imageUploadSize{width:520px;height:520px;}
.addImg>.imageUploadSize>img{width:100%;height:100%;object-fit:cover;object-position: center;}
  .addPostWrap>.postSharesWrap>.addPost>.addImg>.images{display: flex; flex-direction: column;
    align-items: center; justify-content: center; width: 100%;height: 80%;}
    .addPostWrap>.postSharesWrap>.addPost>.addImg>.images>.imgUploadIcons{ width: 100%;  height: 40%;display:flex;justify-content: center; align-items: center;}
    .addPostWrap>.postSharesWrap>.addPost>.addImg>.images>.imageText{width:100%;height:10%;display:flex;justify-content:center;align-items:center;}
    /* addPost 게시물 이미지 업로드 버튼 */
  .addPostWrap>.postSharesWrap>.addPost>.addImg>.button>.inputFileBtn {padding: 5px 7px;
  background-color:rgb(0,149,246);border-radius: 4px;color: white;cursor: pointer;}
  .addPostWrap>.postSharesWrap>.addPost>.addImg>.button>input{display:none;}


   /* addPost 게시물 글씨 시작 */
   .addPostWrap>.postSharesWrap>.addPost>.addContents{display:flex;flex:1;flex-direction:column;width:24%;height:100%;}
   .addPost>.addContents>.user{width:100%;height:10%;display:flex;margin-top:5px;}
   .addPost>.addContents>.user>.userProfile{width: 100%; height: 100%; display: flex;
    align-items: center; padding-top: 10px}
   .addPost>.addContents>.user>.userProfile>.userImg{width:12%;height:100%;}
   .addPost>.addContents>.user>.userProfile>.userImg>img{width:100%;height:100%;border-radius: 50%;}
   .addPost>.addContents>.user>.userProfile>p{margin-left:10px;}
   .addPost>.addContents>.user>.userName{position:sticky;}
   .addPost>.addContents>.contents{width:100%;height:75%;  position: relative;padding-top:20px;}
   .addPost>.addContents>.contents>textarea{width:100%;min-height:300px;border:none;resize:none; overflow-y: auto;overflow-x:hidden;outline:none;}
   .addPost>.addContents>.contents>p{position:absolute; width: 100%; display: flex; justify-content: flex-end;}
   @media screen and (min-width:750px) and (max-width:1250px) {
    .addPostWrap{width:750px;height:550px;}
    .addImg>.imageUploadSize{width:400px;height:400px;}
   }
   @media screen and (min-width:501px)and (max-width:750px){
    .addPostWrap{width:650px;}
    .addPost>.addImg{width:350px;height:100%;}
    .addImg>.imageUploadSize{width:100%;height:100%;}
    .addPostWrap>.postSharesWrap>.addPost>.addContents{width:300px;}
   }
   @media screen and (max-width:500px){
    .addPostWrap { max-width: 860px; max-height: 758px; margin: 0 auto; display: flex; flex-direction: column;
    align-items: center; width: 100%; height:100%; overflow-x: hidden;}
   .addPostWrap>.postSharesWrap>.addPost{height:90%;flex-direction:column;overflow-x:hidden;}
   .addPost>.addImg{height:50%;}
   .addImg>.imageUploadSize{width:100%;height:100%;}
   .hrXGvK .addImg>.imageUploadSize>img{width:100%;}
   .addPostWrap>.postSharesWrap>.addPost>.addContents{width:100%;height: 50%;margin-top: 10px;}
   .addPost>.addContents>.user{height: 25%; margin-top: 0;
    align-items: center; justify-content: center;}
   .addPost>.addContents>.contents{position:initial;}
   .addPost>.addContents>.contents>p{height:10%;position:unset}
  }
  `

export default ModalAdd;

