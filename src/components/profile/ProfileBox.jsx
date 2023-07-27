import { styled } from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const ProfileBox = ({ post }) => {
  const navigate = useNavigate();
  const goPathHandle = (id) => {
    window.location.href = `/post/${id}`;
  };
  return (
    <Box src={post.profileImgUrl} onClick={() => goPathHandle(post.postId)} />
  );
};
export default ProfileBox;

const Box = styled.img`
  width: calc((100% / 3) - 10px);
  aspect-ratio: 1/1;
  background-color: #f0f0f0;
  margin-bottom: 10px;
  box-sizing: border-box;
  object-fit: cover;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
