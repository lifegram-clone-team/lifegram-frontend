import React, { useEffect, useState } from "react";
import useInput from "../../hooks/useInput";
import styled from "styled-components";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { createPost, getPostDetail } from "../../api/api";
import { getUserInfo } from "../../api/api";

const ModalModify = () => {
  const { id } = useParams();
  const [edited, setEdited] = useState(false);
  const [content, setContent, handleContentsChange] = useInput("");
  const [addImg, setAddImg, handleImgChange] = useInput("");
  const [userName, setUserName] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [image, setImage] = useState("");
  const [inputCount, setInputCount] = useState(0);
  const [addUser, setAddUser] = useState(null);
  const token = localStorage.getItem("accessToken");
  const { isLoading, error, data } = useQuery("profileUserImg", getUserInfo);
  const { data: postDetailData } = useQuery("postDetail", () =>
    getPostDetail(id)
  );
  const navigate = useNavigate();

  // console.log(data)
  // const data={
  //   addUser:"ParkMinji",
  //   addUserImg:"https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
  // }
  // useEffect(() => {
  //   getUserInfo();
  // }, []);

  const onModifyPost = async (e) => {
    e.preventDefault();
    const contents = {
      content,
    };
    const response = await axios.put(`${URL}/post/${id}`, contents, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // console.log(response)
    navigate(-1);
  };

  const clickPrevHandler = () => {
    navigate(-1);
  };
  const checkContents = (e) => {
    const content = e.target.value;
    const maxLength = 2200;

    if (content.length > maxLength) {
      alert("최대 2200자까지 입력 가능합니다.");
      e.target.value = content.substring(0, maxLength); // Truncate the content to the maximum length
    }

    setInputCount(e.target.value.length);
    setContent(e.target.value);
  };
  return (
    <ModifyPosts>
      <form className="modifyPostWrap" onSubmit={onModifyPost}>
        <div className="postSharesWrap">
          <div className="postShare">
            <button type="button" onClick={clickPrevHandler}>
              취소
            </button>
            <h4>새 게시물 공유하기</h4>
            <div className="finishBtn">
              <button type="submit">완료</button>
            </div>
          </div>
          <div className="modifyPost">
            <div className="addImg">
              <img src={postDetailData?.postImgUrl} alt="" />
            </div>
            <div className="addContents">
              <div className="user">
                <div className="userProfile">
                  <div className="userImg">
                    <img src={data?.profileImgUrl} alt="" />
                  </div>
                  <p>{data?.userName}</p>
                </div>
              </div>
              <div className="contents">
                <textarea
                  cols="30"
                  rows={content.length > 500 ? "20" : "10"}
                  placeholder="문구 입력"
                  maxLength="2200"
                  value={content}
                  onChange={handleContentsChange}
                  onInput={checkContents}
                  className="content"
                >
                  {inputCount > 2200 ? "errorText" : ""}{" "}
                </textarea>
                <p>
                  <span>{inputCount}</span>
                  <span>/2200자</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </ModifyPosts>
  );
};
const ModifyPosts = styled.div`
  .modifyPostWrap {
    max-width: 860px;
    max-height: 758px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 530px;
    padding-top: 35px;
  }

  /* modifyPost 게시물 상단 공유하기 */
  .modifyPostWrap > .postSharesWrap {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    border: 5px solid #ffffff;
    border-radius: 10px;
  }
  .modifyPostWrap > .postSharesWrap > .postShare {
    display: flex;
    border-bottom: 1px solid #dedede;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 10%;
  }
  .modifyPostWrap > .postSharesWrap > .postShare > button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
  .modifyPostWrap > .postSharesWrap > .postShare > h4 {
    font-size: 22px;
  }
  .postShare > .finishBtn > button {
    background: transparent;
    border: none;
    font-size: 14px;
    font-weight: 600;
    color: rgb(0, 149, 246);
    cursor: pointer;
  }
  /* modifyPost 게시물 이미지, 글씨 감싸기 */
  .modifyPostWrap > .postSharesWrap > .modifyPost {
    display: flex;
    width: 100%;
    height: 90%;
  }
  /* modifyPost 게시물 이미지 시작 */
  .modifyPost > .addImg {
    max-width: 860px;
    max-height: 860px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 520px;
    height: 100%;
    border-right: 1px solid #dedede;
    margin-right: 10px;
  }
  .modifyPost > .addImg > img {
    width: 100%;
    height: 90%;
    object-fit: cover;
  }
  .addImg > .imageUploadSize {
    width: 100%;
    height: 100%;
  }
  .addImg > .imageUploadSize > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  .modifyPostWrap > .postSharesWrap > .modifyPost > .addImg > .images {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80%;
  }
  .modifyPostWrap
    > .postSharesWrap
    > .modifyPost
    > .addImg
    > .images
    > .imgUploadIcons {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modifyPostWrap
    > .postSharesWrap
    > .modifyPost
    > .addImg
    > .images
    > .imageText {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }
  /* modifyPost 게시물 이미지 업로드 버튼 */
  .modifyPostWrap
    > .postSharesWrap
    > .modifyPost
    > .addImg
    > .button
    > .inputFileBtn {
    padding: 5px 7px;
    background-color: rgb(0, 149, 246);
    border-radius: 4px;
    color: white;
    cursor: pointer;
    font-size: 15px;
  }
  .modifyPostWrap > .postSharesWrap > .modifyPost > .addImg > .button > input {
    display: none;
  }

  /* modifyPost 게시물 글씨 시작 */
  .modifyPostWrap > .postSharesWrap > .modifyPost > .addContents {
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 24%;
    height: 100%;
  }
  .modifyPost > .addContents > .user {
    width: 100%;
    height: 10%;
    display: flex;
    margin-top: 5px;
  }
  .modifyPost > .addContents > .user > .userProfile {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 18px;
  }
  .modifyPost > .addContents > .user > .userProfile > .userImg {
    width: 12%;
    height: 100%;
  }
  .modifyPost > .addContents > .user > .userProfile > .userImg > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .modifyPost > .addContents > .user > .userProfile > p {
    margin-left: 10px;
  }
  .modifyPost > .addContents > .user > .userName {
    position: sticky;
  }
  .modifyPost > .addContents > .contents {
    width: 100%;
    height: 75%;
    position: relative;
    padding-top: 20px;
  }
  .modifyPost > .addContents > .contents > textarea {
    width: 100%;
    min-height: 300px;
    border: none;
    resize: none;
    overflow-y: auto;
    overflow-x: hidden;
    outline: none;
  }
  .modifyPost > .addContents > .contents > p {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    font-size: 16px;
  }
  @media screen and (min-width: 750px) and (max-width: 1250px) {
    .modifyPostWrap {
      width: 750px;
      height: 550px;
    }
    .addImg > .imageUploadSize {
      width: 400px;
      height: 400px;
    }
  }
  @media screen and (min-width: 501px) and (max-width: 750px) {
    .modifyPostWrap {
      width: 650px;
    }
    .modifyPost > .addImg {
      width: 350px;
      height: 100%;
    }
    .addImg > .imageUploadSize {
      width: 100%;
      height: 100%;
    }
    .modifyPostWrap > .postSharesWrap > .modifyPost > .addContents {
      width: 300px;
    }
  }
  @media screen and (max-width: 500px) {
    .modifyPostWrap {
      max-width: 860px;
      max-height: 758px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100%;
      overflow-x: hidden;
    }
    .modifyPostWrap > .postSharesWrap > .modifyPost {
      height: 90%;
      flex-direction: column;
      overflow-x: hidden;
    }
    .modifyPost > .addImg {
      height: 50%;
    }
    .addImg > .imageUploadSize {
      width: 100%;
      height: 100%;
    }
    .hrXGvK .addImg > .imageUploadSize > img {
      width: 100%;
    }
    .modifyPostWrap > .postSharesWrap > .modifyPost > .addContents {
      width: 100%;
      height: 50%;
      margin-top: 10px;
    }
    .modifyPost > .addContents > .user {
      height: 25%;
      margin-top: 0;
      align-items: center;
      justify-content: center;
    }
    .modifyPost > .addContents > .contents {
      position: initial;
    }
    .modifyPost > .addContents > .contents > p {
      height: 10%;
      position: unset;
    }
  }
`;

export default ModalModify;
