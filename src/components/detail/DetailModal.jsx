import { styled } from 'styled-components';
import CommentContainer from './CommentContainer';
import ProfileContainer from './ProfileContainer';
import { BsHeart, BsHeartFill, BsChat } from 'react-icons/bs';

const DetailModal = () => {
  const imgUrl = `https://www.allkpop.com/upload/2023/07/content/050955/1688565311-20230705-newjeans.jpg`;
  const writer = `newjeans`;
  const writerImgUrl = `https://biz.chosun.com/resizer/oeOznwvT58PZ0_eUSVTEp24tnMY=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/4UW3T7CE7453JNFYEETVYHRUBM.jpg`;
  const createdAt = `23.07.21`;
  const content = 'NewJeans SUPER SHY 2023.7.7. 1PM (KST) RELEASE';
  const likeCount = 5135;
  const formatLikeCount = likeCount.toLocaleString();
  const isLike = false;

  // coment.writer
  const commentWriter = 'junholee';
  // coment.writerImgUrl
  const commentWriterImgUrl = `https://dimg.donga.com/wps/SPORTS/IMAGE/2022/11/28/116722180.1.png`;
  // coment.content
  const commentContent = '뉴진스 화이팅~';
  // conet.createdAt
  const commentCreatedAt = '23.07.21';

  return (
    <StModalBg>
      <StDetailModal>
        <StImgContainer>
          <img src={imgUrl} alt='img' />
        </StImgContainer>
        <StPost>
          <ProfileContainer writerImgUrl={writerImgUrl} writer={writer} />
          <ProfileContainer writerImgUrl={writerImgUrl} writer={writer} />
          <div className='content'>{content}</div>
          <div className='content time'>{createdAt}</div>
          <CommentContainer
            commentWriterImgUrl={commentWriterImgUrl}
            commentWriter={commentWriter}
            commentContent={commentContent}
            commentCreatedAt={commentCreatedAt}
          />
          <StFooter>
            <StIconContainer>
              {isLike ? <BsHeartFill size='26' /> : <BsHeart size='26' />}
              <BsChat size='26' />
            </StIconContainer>
            <div className='like'>{`좋아요 ${formatLikeCount}개`}</div>
            <div className='time'>{commentCreatedAt}</div>
            <input type='text' placeholder='댓글 달기...' />
          </StFooter>
        </StPost>
      </StDetailModal>
    </StModalBg>
  );
};

export default DetailModal;

const StModalBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const StDetailModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 90%;
  border: 1px solid red;
`;

const StImgContainer = styled.div`
  width: 65%;
  height: 100%;
  border: 1px solid green;
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StPost = styled.div`
  position: relative;
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  border: 1px solid black;
  margin-left: 15px;

  .content {
    padding-left: 55px;
    padding-right: 15px;
  }

  .time {
    font-size: 13px;
    color: grey;
  }
`;

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
  }

  input {
    height: 45px;
    margin-top: 15px;

    &::placeholder {
      padding-left: 25px;
    }
  }
`;

const StIconContainer = styled.div`
  display: flex;
  gap: 20px;
`;
