import axios from "axios";
const URL = process.env.REACT_APP_API_URI;
const token = localStorage.getItem("accessToken");

//전체 게시물 조회
const getPosts = async (pageNum) => {
  const response = await axios.get(`${URL}/post?page=${pageNum}&size=5`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // console.log('getTodos response', response);
  return response.data;
};

// 게시물 작성
const createPost = async (newPost) => {
  await axios({
    url: `${URL}/post`,
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: newPost,
    // withCredentials: true,
  })
    .then((res) => {
      if (res.status === 200) {
        alert("게시글이 작성됐어요");
      }
    })
    .catch((err) => console.log(err));
};

// 게시물 상세 조회
const getPostDetail = async (postId) => {
  const response = await axios.get(`${URL}/post/${postId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // console.log(response);
  return response.data;
};

// 게시물 삭제
const deletePost = async (postId) => {
  await axios({
    url: `${URL}/post/${postId}`,
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (res.status === 200) {
        alert("게시글이 삭제됐어요");
      }
    })
    .catch((err) => console.log(err));
};

// 좋아요 변경
const updateIsLike = async (postId) => {
  await axios({
    url: `${URL}/post/${postId}/like`,
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (res.status === 200) {
        alert("좋아요 상태가 변경됐어요");
      }
    })
    .catch((err) => console.log(err));
};

// 게시글 수정
const updateEditPost = async (postId, newPost) => {
  await axios({
    url: `${URL}/post/${postId}`,
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: newPost,
  })
    .then((res) => {
      if (res.status === 200) {
        alert("게시글이 성공적으로 변경됐어요");
      }
    })

    .catch((err) => console.log(err));
};

// 댓글 작성
const createComment = async (postId, newComment) => {
  console.log(`댓글작성, id: ${postId}, newComment: ${newComment}`);

  await axios({
    url: `${URL}/post/${postId}/comment`,
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: { content: newComment },
    // withCredentials: true,
  })
    .then((res) => {
      if (res.status === 200) {
        alert("댓글이 작성됐어요");
      }
    })
    .catch((err) => console.log(err));
};

// 댓글 삭제
const deleteComment = async (postId, commentId) => {
  await axios({
    url: `${URL}/post/${postId}/comment/${commentId}`,
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (res.status === 200) {
        alert("댓글이 삭제됐어요");
      }
    })
    .catch((err) => console.log(err));
};

// 프로필 메인 화면 유저 정보
const getUserInfo = async () => {
  const response = await axios.get(`${URL}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // console.log(response);
  return response.data;
};
//프로필 메인 화면 자신의 게시글 목록
const getUserPosts = async (pageNum) => {
  const response = await axios.get(`${URL}/post/user?page=${pageNum}&size=12`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export {
  getPosts,
  getPostDetail,
  createPost,
  deletePost,
  updateIsLike,
  updateEditPost,
  createComment,
  deleteComment,
  getUserInfo,
  getUserPosts,
};
