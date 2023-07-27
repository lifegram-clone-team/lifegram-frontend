import { css, styled } from "styled-components";

const WriterInfoContainer = ({
  writerImgUrl,
  writer,
  content,
  createdAt,
  media,
}) => {
  content &&
    console.log(
      "WriterInfoContainer",
      writerImgUrl,
      writer,
      content,
      createdAt,
      media
    );

  return (
    <StProfileContainer media={media}>
      <div className="lineContent">
        <StProImgContainer>
          <img src={writerImgUrl} alt="writerimg" />
        </StProImgContainer>
        <StProBodyContainer>
          <StWriterContent>
            <span className="writer">{writer}</span>
            <span className="content">{content}</span>
          </StWriterContent>
          <div className="time">{createdAt && createdAt.slice(0, 10)}</div>
        </StProBodyContainer>
      </div>
    </StProfileContainer>
  );
};

export default WriterInfoContainer;

const StProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  padding: 0 10px 10px 10px;
  box-sizing: border-box;

  ${(props) =>
    props.media === "media" &&
    css`
      @media (max-width: 735px) {
        display: none;
      }
    `}
  .lineContent {
    display: flex;
    width: 100%;
  }
  .time {
    margin-top: 10px;
    margin-left: auto;
    color: gray;
  }
`;

const StProImgContainer = styled.div`
  margin-bottom: auto;
  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
  }
`;
const StProBodyContainer = styled.div`
  display: flex;
  flex-direction: column;

  .time {
    font-size: 13px;
    color: grey;
  }
`;
const StWriterContent = styled.div`
  display: flex;
  .writer {
    font-size: 16px;
    font-weight: 700;
    display: flex;
    margin-left: 10px;
  }
  .content {
    word-break: break-all;
    overflow-wrap: break-word;
    margin-left: 10px;
  }
`;
