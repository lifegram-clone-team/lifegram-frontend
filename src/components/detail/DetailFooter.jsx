import { useState } from 'react';
import { BsHeart, BsHeartFill, BsChat } from 'react-icons/bs';
import { useMutation } from 'react-query';
import { useQueryClient } from 'react-query';
import { styled } from 'styled-components';
import { createComment, updateIsLike } from '../../api/api';

const DetailFooter = ({ like, likeCount, commentCreatedAt, id }) => {
  //useState, onchange input
  const [comment, setComment] = useState('');
  const onChangeComment = (e) => {
    setComment(e.target.value);
  };
  //isLike 숫자세자리마다 ,붙이기
  const formatLikeCount = likeCount.toLocaleString();
  //리액트쿼리 세팅
  const queryClient = useQueryClient();
  //좋아요 update mutate => 요청시 boolean값 조절
  const { mutate: updateIsLikeMutation } = useMutation(() => updateIsLike(id), {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    },
  });
  const onClickUpdateIsLike = async () => {
    updateIsLikeMutation();
  };
  //댓글 생성 mutate
  const { mutate: createCommentMutate } = useMutation(() => createComment(id, comment), {
    onSuccess: () => {
      queryClient.invalidateQueries('comments');
    },
  });

  const onClickPostComment = () => {
    if (comment.length === 0) {
      alert('댓글을 입력하세요');
    }
    createCommentMutate();
    setComment('');
  };

  return (
    <StFooter>
      <StIconContainer>
        {like ? (
          <BsHeartFill onClick={() => onClickUpdateIsLike()} size='26' color='red' />
        ) : (
          <BsHeart onClick={() => onClickUpdateIsLike()} size='26' />
        )}
        <BsChat size='26' />
      </StIconContainer>
      <div className='like'>{`좋아요 ${formatLikeCount}개`}</div>
      <div className='time main'>{commentCreatedAt}</div>
      <input value={comment} onChange={onChangeComment} placeholder='댓글 달기...' />
      <StPosition>
        <div onClick={onClickPostComment} className='upload'>
          게시
        </div>
      </StPosition>
    </StFooter>
  );
};

export default DetailFooter;

const StFooter = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  display: flex;
  bottom: 0px;

  .like {
    margin-top: 15px;
    font-size: 16px;
    font-weight: 700;
    padding-left: 15px;
  }

  input {
    &:focus {
      outline: none;
    }
    height: 45px;
    margin-top: 15px;
    padding-left: 25px;
    padding-right: 50px;
    border: none;
    border-top: 1px solid grey;

    &::placeholder {
      font-size: 15px;
    }
  }
`;

const StIconContainer = styled.div`
  padding-left: 15px;

  display: flex;
  gap: 20px;
`;

const StPosition = styled.div`
  position: relative;

  .upload {
    position: absolute;
    right: 15px;
    bottom: 13px;
    color: #0095f6;
    cursor: pointer;
  }
`;
