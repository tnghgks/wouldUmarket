import { Link } from "react-router-dom";
import styled from "styled-components";
import CommonButton from "../../../../Components/button/CommonButton";
import IconMessageCircle from "../../../../Components/icon/IconMessageCircle";
import IconShare from "../../../../Components/icon/IconShare";

function FollowBtns({ isFollow, handleFollow, handleUnFollow }) {
  return (
    <BtnContainer>
      <LinkBtn to="/chat/id">
        <IconMessageCircle />
      </LinkBtn>
      {isFollow ? (
        <CommonButton size="md" fontColor="#767676" bgColor="white" event={handleUnFollow}>
          언팔로우
        </CommonButton>
      ) : (
        <CommonButton size="md" event={handleFollow}>
          팔로우
        </CommonButton>
      )}
      <LinkBtn>
        <IconShare />
      </LinkBtn>
    </BtnContainer>
  );
}
export default FollowBtns;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 24px;
  margin-bottom: 26px;
`;
const LinkBtn = styled(Link)`
  width: 34px;
  height: 34px;
  border: 1px solid #dbdbdb;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  cursor: pointer;
  img {
    width: 20px;
    height: 20px;
  }
`;
